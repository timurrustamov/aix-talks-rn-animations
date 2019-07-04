import { useState } from 'react';

const useOnStepChange = (cb?: (step: number) => void) => {
  const [step, setStep] = useState(0);
  const onChange = () => {
    const nextStep = step + 1;
    setStep(nextStep);
    if (cb) {
      cb(nextStep);
    }
  };

  return onChange;
};

export default useOnStepChange;

