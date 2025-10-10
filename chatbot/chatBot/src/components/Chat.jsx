import React, { useEffect, useRef, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
const Chat = (props) => {
  const { room } = props;
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      console.log("New Message");
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id }); //sytax for firbase
      });

      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newMessage);
    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
    setNewMessage(" ");
  };
  return (
    <div className=" flex flex-col m-30 justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        action="#"
        className="flex flex-col justify-center items-center border-2 border-blue-800 rounded-2xl m-5 p-10 "
      >
        {/* <h1 className="text-2xl italic mb-4">
          Start Your Conversation...🥳✨💕
        </h1> */}
        <div className="border-2 border-green-950 p-4 w-full bg-blue-950 text-white text-center text-2xl mb-2">
          <h1>Welcome to Room : {room.toUpperCase()}</h1>
        </div>
        <div className="text-left">
          {messages.map((message) => (
            <div className="" key={message.id}>
              <span className="font-bold">{message.user}: </span>
              {message.text}
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Type your message here...."
          className="w-full p-2 border-2 border-black rounded"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button
          type="submit"
          className="bg-blue-600 p-2 m-2 rounded cursor-pointer text-white text-shadow-black-100 w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
