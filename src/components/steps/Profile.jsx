import React,{useState} from 'react'

const Profile = ({handleSubmit, formData, handleInputChange ,startDateProp, endDateProp, enrollDateProp, gradutionProp }) => {

  const [startDate, setStartDate] = useState(startDateProp || ''); // Initialize with an empty string
  const [endDate, setEndDate] = useState(endDateProp || ''); // Initialize with an empty string
  const [enrollDate, setEnrollDate] = useState(enrollDateProp || ''); // Initialize with an empty string
  const [gradution, setGradution] = useState(gradutionProp || '');

  const handleEnrollDateChange = (e) => {
    const newEnrollDate = e.target.value;
    setEnrollDate(newEnrollDate);
    handleInputChange('enrollDate', formData.enrollDate, newEnrollDate, gradution);
  };

  const handleGradutionDateChange = (e) => {
    const newGradDate = e.target.value;
    setGradution(newGradDate);
    handleInputChange('gradution', formData.gradution, enrollDate, newGradDate);
  };
  
  
  
  
  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    handleInputChange('fromDate', formData.fromDate, newStartDate, endDate);
  };

 

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);
    handleInputChange('endDate',  formData.endDate, startDate, newEndDate);
  };
    
  return (
    <div className="w-full h-full ">
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-20 pt-6 pb-8 mb-4 justify-center items-center'>
      <div>
      <label htmlFor="About-message" className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">About You:</label>
        <textarea 
          id="About-message" 
          
          rows="4" className="block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            
          placeholder="Write about yourself..." name='about' value={formData.about}
            onChange={(e)=>handleInputChange(e.target.name,e.target.value)}>

        </textarea>
      </div>
       
        

        <div>
            <label htmlFor="teaching-message" className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">Teaching Experience:</label>
            <textarea 
              id="experience-message" 
              
              rows="4" className="block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                
              placeholder="Write about experience..." name='experience' value={formData.experience}
                onChange={(e)=>handleInputChange(e.target.name,e.target.value)}>

            </textarea>
        </div>

        <div className='mt-3'>
          <label htmlFor="company" className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">company:</label>
          <input 
          type="text" 
          id="company" 
          name="company" 
          value={formData.company}
          onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
          className="ml-3 w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs
           focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              <div className='mt-3'>
              <label htmlFor="fromDate" className="ml-0  mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">
                          From Date:
                        </label>
                        <input
                          type="date"
                          value={startDate}
                          name="fromDate"
                          id="fromDate"
                          className="ml-0 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[150px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          onChange={handleStartDateChange}
                        />
                        <label htmlFor="endDate" className="ml-2 mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">
                          End Date:
                        </label>
                        <input
                          type="date"
                          value={endDate}
                          name="endDate"
                          id="endDate"
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[150px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          onChange={handleEndDateChange}
                        />
              </div>
              
                
        </div>

        <div className='mt-3'>
          <label htmlFor="education" className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">Education:</label>
          <input 
          type="text" 
          id="education" 
          name="education" 
          value={formData.education}
          onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
          className="ml-3 w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs
           focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              <div className='mt-3'>
              <label htmlFor="enrollDate" className="ml-0  mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">
                          Enrolled Date:
                        </label>
                        <input
                          type="date"
                          value={enrollDate}
                          name="enrollDate"
                          id="enrollDate"
                          className="ml-0 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[150px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          onChange={handleEnrollDateChange}
                        />
                        <label htmlFor="gradution" className="ml-2 mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">
                          Gradution:
                        </label>
                        <input
                          type="date"
                          value={gradution}
                          name="gradution"
                          id="gradution"
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[150px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          onChange={handleGradutionDateChange}
                        />
              </div>
              
                
        </div>

      </form>
      
    </div>
  )
}

export default Profile
