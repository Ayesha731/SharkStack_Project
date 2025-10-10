import "./App.css";
import "./index.css";
import Auth from "./components/Auth";
import { useState, useRef } from "react";
import Cookies from "universal-cookie";
import Chat from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
const cookies = new Cookies();
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);
  const signUserOut = async () => {
    await signOut();
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };
  if (!isAuth) {
    return (
      <>
        <Auth setIsAuth={setIsAuth} />
      </>
    );
  }
  return (
    <>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="h-dvh w-dvw bg-gray-100 flex flex-col justify-center items-center  ">
          <div className="border-2 border-blue-600 flex flex-col p-10 rounded">
            <label className="text-2xl mb-4">Enter Room Name:</label>
            <input
              type="text"
              name="text"
              className=" border-2 border-blue-600 p-2 focus:border-2 border-blue-600 mb-4 rounded"
              placeholder="Type your room....."
              ref={roomInputRef}
              // onChange={(e) => {
              //   setRoom(e.target.value);
              // }}
            />
            <button
              className="text-white bg-blue-600 rounded p-2 "
              onClick={() => setRoom(roomInputRef.current.value)}
            >
              Enter Chat
            </button>
          </div>
        </div>
      )}
      <div className="">
        <button
          className="text-white bg-blue-600 rounded p-2"
          onClick={signUserOut}
        >
          Sign Out
        </button>
      </div>
    </>
  );
}

export default App;
