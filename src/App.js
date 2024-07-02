import React, { useState } from "react";
import TopBar from "./TopBar";
import ProjectForm from "./ProjectForm";
import ProgressBar from "./ProgressBar";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="App">
      <TopBar />
      <ProgressBar currentStep={currentStep} />
      <ProjectForm onNextStep={handleNextStep} />
    </div>
  );
};

export default App;
