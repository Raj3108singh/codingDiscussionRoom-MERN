import React, { useState } from "react";
import classes from "./Register.module.css";

import StepName from "../Step/StepName/StepName";
import StepAvatar from "../Step/StepAvatar/StepAvatar";
import StepOtp from "../Step/StepOtp/StepOtp";
import StepPhoneEmail from "../Step/StepPhoneEmail/StepPhoneEmail";
import StepUsername from "../Step/StepUsername/StepUsername";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUsername,
};

const Register = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  const onNext = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div>
      <Step onNext={onNext} />
    </div>
  );
};

export default Register;
