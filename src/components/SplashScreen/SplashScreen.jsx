import React, { useState } from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const SplashScreen = () => {
  const [signup, setSignUp]=useState(false);

  const showSignUp=(BoolVal)=>{
    setSignUp(BoolVal);
  }

  return (
    <div>
      {
        signup ? <SignUp showSignUp={showSignUp}/> :
        <SignIn showSignUp={showSignUp} />
      }
    </div>
  );
};

export default SplashScreen;
