import React from "react";

const StepOtp = ({ onNext }) => {
  return (
    <>
      <div> Set OTP</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepOtp;
