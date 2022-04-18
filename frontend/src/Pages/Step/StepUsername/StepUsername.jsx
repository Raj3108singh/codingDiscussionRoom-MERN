import React from "react";

const StepUsername = ({ onNext }) => {
  return (
    <>
      <div> Set USer Name</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepUsername;
