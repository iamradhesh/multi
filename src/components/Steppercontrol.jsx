import React from 'react'

const Steppercontrol = ({handleClick,currentStep,steps}) => {


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
      onClick={()=>handleClick("next")}
      className='bg-orange-400 text-white uppercase py-2 px-4
      rounded-xl font-semibold cursor-pointer  border-slate-300
      hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'>
         {currentStep===steps.length?"Submit":"Next"}
         

      </button>
    </div>
  )
}

export default Steppercontrol
