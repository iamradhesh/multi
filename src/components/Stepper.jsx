import React, { useEffect, useState, useRef } from 'react';

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    newSteps.forEach((step, index) => {
      if (index === stepNumber) {
        step.highlighted = true;
        step.selected = true;
        step.completed = true;
      } else if (index < stepNumber) {
        step.highlighted = false;
        step.selected = true;
        step.completed = true;
      } else {
        step.highlighted = false;
        step.selected = false;
        step.completed = false;
      }
    });
    return newSteps;
  };

  useEffect(() => {
    const stepState = steps.map((step, index) => ({
      description: step,
      completed: false,
      highlighted: index === 0 ? true : false,
      selected: index === 0 ? true : false,
    }));
    stepRef.current = stepState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => (
    <div key={index} className="flex items-center">
      <div className="relative flex flex-col items-center text-teal-600">
        <div
          className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${
            step.selected
              ? 'bg-green-600 text-white font-bold border border-green-600'
              : ''
          }`}
        >
          {step.completed ? (
            <span className="text-white font-bold text-xl">&#10003;</span>
          ) : (
            index + 1
          )}
        </div>
        <div
          className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${
            step.highlighted ? 'text-gray-900' : 'text-gray-400'
          }`}
        >
          {step.description}
        </div>
      </div>
      {index < newStep.length - 1 && (
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.completed ? 'border-green-600' : 'border-gray-300'
          }`}
        >
          {/* Display Line */}
        </div>
      )}
    </div>
  ));

  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};

export default Stepper;
