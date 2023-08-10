
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
  const [stepData, setStepData] = useState({});
  
  const steps=[
    "Personal",
    "Profile",
    "Experience",
    "Completed"
  ];
  const [formData, setFormData] = useState({
    firstName: '',
   
    email: '',
    
    profession:'',
    major:"",
    gradDate:"",
    selection: '',
    University:'',
    phone: '',
    about: '',
    experience: '',
    company:'',
    fromDate:'',
    endDate:'',
    enrollDate:'',
    gradution:'',
    education:''
    
    

  });
  const validateForm = (data) => {
    const errors = {};
  
    if (!data.email) {
      errors.email = 'Email Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = 'Invalid email address'
    }

    if (!data.phone) {
      errors.phone = 'Phone Number Required';
    } else if (!/^\d{10}$/.test(data.phone)) {
      errors.phone = 'Invalid phone number (10 digits required)';
    }
    if (data.fromDate > data.endDate) {
      errors.fromDate = 'From Date should be less than End Date';
    }
  
    
    // Add similar checks for other fields
  
    return errors;
  };
  const handlegradDate = (name, value) => {

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      gradDate: name === 'gradDate'? value : prevData.gradDate,
    }));
  };
  const handleInputChange = (name, value,startDate, endDate) => {
    if (
      name === 'profession' ||
      name === 'selection' ||
      name === 'yes' ||
      name === 'no' ||
      name === 'enrollDate' ||
      name === 'gradution'
    ) {
      // For radio buttons and date fields, update formData with the selected value
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        
        enrollDate: name === 'enrollDate' ? startDate : prevData.enrollDate,
        gradution: name === 'gradution' ? endDate : prevData.gradution,
      }));
    } 
    
    
    
    else {
      // For other input types, update formData with the event target's value
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        fromDate: startDate, // Use startDate directly
        endDate: endDate,
      }));
    }
    
  };
  
  
  
  const handleSubmit = (formData) => {
    // Here you can perform actions like API calls with formData
    console.log('Form data submitted:', formData);
    // You might want to update the finalData state or perform other actions
  };
  const displaySteps=(step)=>{
    switch(step){
      case 1:
        return <Personal  handleSubmit={handleSubmit} formData={formData} handleInputChange={handleInputChange} startDate={formData.date} stepData={stepData} handlegradDate={handlegradDate}/>
      case 2:
        return <Profile  handleSubmit={handleSubmit} formData={formData} handleInputChange={handleInputChange} startDateProp={formData.fromDate} endDateProp={formData.endDate} enrollDateProp={formData.enrollDate} gradutionProp={formData.gradution}  />
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
     if (direction === "next") {
      setStepData(formData);// Update formData with stepData
  }
  let newStep = currentStep;
  direction === "next" ? (newStep++) : (newStep--);
  newStep > 0 && steps.length && setCurrentStep(newStep);
  }
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* Stepper*/}
        <div className="container horizontal mt-5 ">
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
             {displaySteps(currentStep, formData, handleInputChange)}
        </stepperContext.Provider>
        </div>
        </div>
        
      
      {/* Navigation Controls */}
      <Steppercontrol 
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
        handleSubmit={handleSubmit}
        formData={formData}
        validateForm={validateForm}
      />
      

    </div>
  );
}

export default App;
