import React from 'react';

const Profile = ({ handleSubmit, formData, handleInputChange, startDateProp, endDateProp, enrollDateProp, gradutionProp, setFormData,handleEducationDateChange }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded-lg px-8 py-6 space-y-6">
        {/* About You */}
        <div>
          <label htmlFor="about" className="block text-sm font-medium text-gray-700">
            About You
          </label>
          <textarea
            id="about"
            rows="4"
            className="mt-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write about yourself..."
            name="about"
            value={formData.about}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
        </div>

        {/* Teaching Experience */}
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
            Teaching Experience
          </label>
          <textarea
            id="experience"
            rows="4"
            className="mt-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write about experience..."
            name="experience"
            value={formData.experience}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
        </div>

        {/* Companies */}
        {formData.companies.map((company, index) => (
          <div key={index}>
            <label htmlFor={`companyName-${index}`} className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              className="mt-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              id={`companyName-${index}`}
              name={`companyName-${index}`}
              value={company.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value, null, null, index)}
            />

            <div className="flex space-x-4 mt-3">
              <div>
                <label htmlFor={`startDate-${index}`} className="block text-sm font-medium text-gray-700">
                  Start Date
                </label>
                <input
                  type="date"
                  className="mt-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  id={`startDate-${index}`}
                  value={company.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value, company.startDate, company.endDate, index)}
                />
              </div>
              <div>
                <label htmlFor={`endDate-${index}`} className="block text-sm font-medium text-gray-700">
                  End Date
                </label>
                <input
                  type="date"
                  className="mt-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  id={`endDate-${index}`}
                  value={company.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value, company.startDate, company.endDate, index)}
                />
              </div>
            </div>
          </div>
        ))}

        <button
          className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5"
          type="button"
          onClick={() => setFormData((prevData) => ({ ...prevData, companies: [...prevData.companies, { companyName: '', startDate: '', endDate: '' }] }))}
        >
          Add Company +
        </button>

       {/* Education */}
{/* Education */}
{formData.education.map((education, index) => (
  <div key={index}>
    <label htmlFor={`education-${index}`} className="block text-sm font-medium text-gray-700">
      Education {index + 1}
    </label>
    <input
      type="text"
      id={`education-${index}`}
      name={`education-${index}`}
      value={education.education}
      onChange={(e) => handleEducationDateChange(index, 'education', e.target.value)}
      // ... (other attributes)
    />

    <div className="flex space-x-4 mt-3">
      <div>
        <label htmlFor={`enrollDate-${index}`} className="block text-sm font-medium text-gray-700">
          Enrolled Date
        </label>
        <input
          type="date"
          id={`enrollDate-${index}`}
          value={education.enrollDate}
          onChange={(e) => handleEducationDateChange(index, 'enrollDate', e.target.value)}
          // ... (other attributes)
        />
      </div>
      <div>
        <label htmlFor={`graduation-${index}`} className="block text-sm font-medium text-gray-700">
          Graduation Date
        </label>
        <input
          type="date"
          id={`graduation-${index}`}
          value={education.graduation}
          onChange={(e) => handleEducationDateChange(index, 'graduation', e.target.value)}
          // ... (other attributes)
        />
      </div>
    </div>
  </div>
))}

<button
  className="bg-gradient-to-r from-blue-200 via-blue-300 to-green-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2.5"
  type="button"
  onClick={() =>
    setFormData((prevData) => ({
      ...prevData,
      education: [...prevData.education, { education: '', enrollDate: '', graduation: '' }],
    }))
  }
>
  Add Education +
</button>



       
      </form>
    </div>
  );
};

export default Profile;
