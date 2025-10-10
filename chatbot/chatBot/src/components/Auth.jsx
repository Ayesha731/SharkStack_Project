import React, { useState } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Auth = (props) => {
  const { setIsAuth } = props;
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    if (loading) return; // prevent double clicks
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (error) {
      console.error("Firebase auth error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-dvh bg-gray-200 flex flex-col justify-center items-center">
      <p>Sign in With Google To Continue</p>
      <button
        onClick={signInWithGoogle}
        disabled={loading}
        className={`h-10 px-4 rounded bg-cyan-500 ${
          loading ? "opacity-50" : ""
        }`}
      >
        {loading ? "Signing In..." : "Sign In With Google"}
      </button>
    </div>
  );
};

export default Auth;
