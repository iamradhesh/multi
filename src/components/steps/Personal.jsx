import React ,{useState,useEffect}from 'react'




const Personal = ({handleSubmit, formData, handleInputChange, stepData,handlegradDate }) => {
  const initialStartDate = formData.gradDate || new Date();
  const [startDate, setStartDate] = useState(initialStartDate);
     
  
      
      
  useEffect(() => {
    if (stepData.gradDate) {
      setStartDate(stepData.gradDate);
    }
  }, [stepData.gradDate]);

  function handleDateChange(e) {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    handlegradDate('gradDate', newStartDate);
  }
   
      
      /*const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };*/
    
      return (
        
          <div className="min-h-screen bg-gray-100 flex justify-center items-center">
          
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6 w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center mb-6">Radhesh's Form</h1>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
        </div>
           
            <div className="md:flex md:items-center mb-6">
                <label htmlFor="email" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Email:
                </label>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                />
              </div>


            <div className='md:flex md:items-center mb-6'>
              <label className="   text-gray-500 font-bold " htmlFor="radio">What are you:</label>
              <label className="text-gray-500 font-semibold mr-1 ml-2" htmlFor='radio_University'>University Student</label>
              <input
              className='mr-2'
              type="radio"
              id="radio_University"
              name="profession"
              value="University Student"
              checked={formData.profession === "University Student"}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              /> 
              <label className='text-gray-500 font-semibold mr-1' htmlFor='Business'> Professional</label>
              <input
                type="radio"
                id="Business"
                name="profession"
                value="professional"
                checked={formData.profession === "professional"}
                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              />
            </div>

            <div className=' md:items-center mb-6'>
              <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="University"> University:</label>
              <input
                className='className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                type="text"
                id="University"
                name="University"
                value={formData.University}
                
                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              />
            </div>

            <div className="md:flex md:items-center mb-6">
                <label className="text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4" htmlFor="Major">
                  Major:
                </label>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  id="Major"
                  name="major"
                  value={formData.major}
                  onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                />
              </div>

           
              <div className="md:items-center mb-6 mt-4">
                  <label className="text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4" htmlFor="GradDate">
                    Graduation Date:
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    name="gradDate"
                    id="GradDate"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 hover:bg-white hover:border-purple-500"
                    onChange={handleDateChange}
                  />
                </div>


            <div className='md:flex md:items-center mb-6'>
              <label  className="   text-gray-500 font-bold " htmlFor="radio">Do you have a tax id? :</label>
              <label className="text-gray-500 font-semibold mr-1 ml-2" htmlFor='yes'>Yes</label>
              <input
              className='mr-2'
              type="radio"
              id="yes"
              name="selection"
              value="yes"
              checked={formData.selection === "yes"}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              /> 
              <label className="text-gray-500 font-semibold mr-1 ml-2"  htmlFor='no'>No</label>
              <input
                type="radio"
                id="no"
                name="selection"
                value="no"
                checked={formData.selection === "no"}
                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              />
            </div>
            <div className="md:items-center mb-4">
          <label className="text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4" htmlFor="phone">Phone:</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
        </div>

            
      

      
      
            
          </form>
        </div>
        
     
        
      );
}

export default Personal
