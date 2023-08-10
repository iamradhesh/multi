import React,{useState} from 'react'

const Steppercontrol = ({handleClick,currentStep,steps,handleSubmit,formData,validateForm}) => {


  console.log("currentStep:", currentStep);
  const [validationErrors, setValidationErrors] = useState({});
  const handleNextClick = () => {
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      // No validation errors, proceed to the next step
      if (currentStep === steps.length) {
        handleSubmit();
      } else {
        console.log(formData);
        handleClick("next");
      }
      setValidationErrors({}); // Clear any previous validation errors
    } else {
      // Display validation errors
      setValidationErrors(errors);
    }
  };

  return (
    
    <div className='container flex justify-around mt-4 mb-8'>
      {/* Back Button*/ }
      <button 
      onClick={()=>handleClick("back")}
      className={`bg-white text-slate-400 uppercase py-2 px-4
      rounded-xl font-semibold cursor-pointer border-2 border-slate-300
      hover:bg-slate-700 hover:text-white transition duration-200
      ease-in-out ${currentStep===1?"opacity-50 cursor-not-allowed":""}`}>
         Back
      </button>
     
      {/*Next Button*/}
      <button
        onClick={handleNextClick}
        className="bg-orange-400 text-white uppercase py-2 px-4
        rounded-xl font-semibold cursor-pointer  border-slate-300
        hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
      >
        {currentStep === steps.length ? "Submit" : "Next"}
      </button>

      {/* Display validation errors */}
      {Object.keys(validationErrors).map((fieldName) => (
        <p key={fieldName} className="text-red-500">
          {validationErrors[fieldName]}
        </p>
      ))}
    </div>
  )
}

export default Steppercontrol
