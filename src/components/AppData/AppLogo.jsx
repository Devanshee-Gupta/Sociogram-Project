import React from "react";
import appLogo from "../../assets/react.svg";
const AppLogo = () => {
  return (
      <div className="mx-auto w-50 d-flex align-items-center justify-content-center">
        <img src={appLogo} className="w-100" alt="App logo" />
      </div>
  );
};

export default AppLogo;
