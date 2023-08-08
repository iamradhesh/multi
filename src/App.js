
import './App.css';
import Personal from './components/steps/Personal';
import { stepperContext } from './components/contexts/stepperContext';
import Stepper from './components/Stepper';
import Steppercontrol from './components/Steppercontrol';
import Profile from './components/steps/Profile';
import Experience from './components/steps/Experience';
import thankYou from './components/steps/thankYou';
import { useState } from 'react';

function App() {
  const [currentStep,setCurrentStep]=useState(1);
  const [userData,setUserData]=useState('');
  const [finalData,setFinalData]=useState([]);
  
  const steps=[
    "Personal",
    "Profile",
    "Experience",
    "Completed"
  ];
  
  const displaySteps=(step)=>{
    switch(step){
      case 1:
        return <Personal />
      case 2:
        return <Profile />
      case 3:
        return <Experience />
      case 4:
        return <thankYou/>

      default:
        return (<div><h1>NO Page Found..!!</h1></div>);

      
    }
  }
  const handleClick=(direction)=>{
      //Check if steps are within bounds
      let newStep=currentStep;
      direction==="next"?newStep++ : newStep--;
      newStep>0 && steps.length && setCurrentStep(newStep);
  }
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* Stepper*/}
        <div className="container horizontal mt-5">
          <Stepper 
            steps={steps}
            currentStep={currentStep}
          />

          {/*Display Components*/}
        <div className='my-10 p-10'>
        {/*displaySteps(currentStep)*/}
        <stepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData
          }}>
            {displaySteps(currentStep)}
        </stepperContext.Provider>
        </div>
        </div>
        
      
      {/* Navigation Controls */}
      <Steppercontrol 
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
      

    </div>
  );
}

export default App;
