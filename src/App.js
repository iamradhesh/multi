// Importing necessary components and styles
import './App.css';
import Personal from './components/steps/Personal';
import { stepperContext } from './components/contexts/stepperContext';
import Stepper from './components/Stepper';
import Steppercontrol from './components/Steppercontrol';
import Profile from './components/steps/Profile';
import Experience from './components/steps/Experience';
import FinalPage from './components/steps/FinalPage';
import { useState } from 'react';

function App() {
   // State variables for managing steps, user data, final data, and step data
   const [currentStep, setCurrentStep] = useState(1);
   const [userData, setUserData] = useState('');
   const [finalData, setFinalData] = useState([]);
   const [stepData, setStepData] = useState({});
  
 
  
  // Array of steps for the stepper
  const steps = [
    "Personal",
    "Profile",
    "Experience",
    "Completed"
  ];

  ///Form Fields----------------------------------------------------------------
  // Form fields state to store user input data
 
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
    companies: [{ companyName: '', startDate: '', endDate: '' }],
    Experiences: {
      science: [], // Initialize as an empty array
      software: [],
      Engineering: []
    },
    
    enrollDate:'',
    gradution:'',
    education: [],
    
    

  });

  //FOrm Validation Function----------------------------------------------------------------

  // Function to validate form data
  
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

    data.companies.forEach((company, index) => {
      if (company.startDate && company.endDate && company.startDate > company.endDate) {
        errors[`companies[${index}].startDate`] = 'Start date should be less than End date';
      }
    });

    data.education.forEach((education, index) => {
      if (education.enrollDate && education.graduation && education.enrollDate > education.graduation) {
        errors[`education[${index}].enrollDate`] = 'enrollDate date should be less than gradution date';
      }
    });
  
    // Additional validation for enrollDate and gradution
    if (data.enrollDate && data.graduation && data.enrollDate > data.graduation) {
      errors.enrollDate = 'enrollDate date should be less than gradution date';
    }
   
  
    
    // Add similar checks for other fields
  
    return errors;
  };

  //Handling Graduation Date field seperatly----------------------------------------------------------------
  
  // Handler for changing graduation date
  const handlegradDate = (name, value) => {

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      gradDate: name === 'gradDate'? value : prevData.gradDate,
    }));
  };
// Handler for changing education date
  const handleEducationDateChange = (index, fieldName, dateValue) => {
    // ...update education date and related state
    setFormData((prevData) => {
      const newEducation = [...prevData.education];
      newEducation[index][fieldName] = dateValue;
      return { ...prevData, education: newEducation };
    });
  };
  
  //Handling input Change for All other Field----------------------------------------------------------------
  // Handler for changing input fields
  const handleInputChange = (name, value, startDate, endDate, index) => {
    // ...update form data based on input changes
    if (name === 'companyName' || name === 'startDate' || name === 'endDate') {
      setFormData((prevData) => {
        const newCompanies = [...prevData.companies];
        const updatedCompany = newCompanies[index];
  
        if (name === 'startDate') {
          updatedCompany.startDate = value;
        } else if (name === 'endDate') {
          updatedCompany.endDate = value;
        } else {
          updatedCompany[name] = value;
        }
  
        newCompanies[index] = updatedCompany;
        return { ...prevData, companies: newCompanies };
      });
    }
   
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

  
    if (name === 'science' || name === 'software' || name === 'Engineering') {
      setFormData((prevData) => ({
        ...prevData,
        Experiences: {
          ...prevData.Experiences,
          [name]: typeof value === 'string' ? value.split(',').map(item => item.trim()) : value
        }
      
      }));
      console.log(formData.Experiences);
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
  
  ///Handling Submit Events///--------------------------------------------------------------------
  const handleSubmit = () => {
    // Here you can perform actions like API calls with formData
    console.log('Form data submitted:', formData);
    
    // You might want to update the finalData state or perform other actions
  };

  ///Displaying Components By the help of Stepper---------------------------------------------------------------------
  // Function to render different components based on the current step
  const displaySteps=(step)=>{
    switch(step){
      case 1:
        return <Personal  
        handleSubmit={handleSubmit} 
        formData={formData} 
        handleInputChange={handleInputChange} 
        startDate={formData.date} 
        stepData={stepData} 
        handlegradDate={handlegradDate}/>
      case 2:
        return <Profile  
        handleSubmit={handleSubmit} 
        formData={formData} 
        handleInputChange={handleInputChange} 
        startDateProp={formData.fromDate} 
        endDateProp={formData.endDate} 
        enrollDateProp={formData.enrollDate}
         gradutionProp={formData.gradution} 
         setFormData={setFormData} 
         handleEducationDateChange={handleEducationDateChange} />
      case 3:
        return <Experience handleInputChange={handleInputChange} formData={formData} handleSubmit={handleSubmit}/>
       case 4:
         return <FinalPage formData={formData}/>

      default:
        return (<div><h1>NO Page Found..!!</h1></div>);

      
    }
  }
  //Handling Click buttons (NEXT amd Back)----------------------------------------------------------------
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
