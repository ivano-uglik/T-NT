import React from "react";

import TeslaSignature from "./assets/TeslaSignature.svg";
const Signature = () => {
  return (
    <div className="py-24 flex justify-center">
      <img
        src={TeslaSignature}
        alt="Potpis Nikole Tesle"
        className="w-[50rem]"
      />
    </div>
  );
};

export default Signature;
