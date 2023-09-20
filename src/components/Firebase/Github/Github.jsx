import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, githubProvider } from "@/Authentications/firebase/config";
const Github = () => {
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, githubProvider).then((res) => {
      console.log(res);
    }).catch((err)=>{
        console.log(err)
    })
  };

  return (
    <div>
      <button onClick={handleSignInWithGoogle}>Sign in With Github</button>
    </div>
  );
};

export default Github;
