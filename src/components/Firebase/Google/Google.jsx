import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/Authentications/firebase/config";
const Google = () => {
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <button onClick={handleSignInWithGoogle}>Sign in With Google</button>
    </div>
  );
};

export default Google;
