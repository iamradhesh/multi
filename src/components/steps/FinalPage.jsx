import React from 'react';

const FinalPage = ({ formData }) => {
  return (
    <div className="bg-white p-8 shadow-xl rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Preview</h1>

      {/* Basic Details */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Basic Details:-</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p><strong>First Name:</strong> {formData.firstName}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
          </div>
          <div>
            <p><strong>Profession:</strong> {formData.profession}</p>
            <p><strong>Major:</strong> {formData.major}</p>
            <p><strong>Graduation Date:</strong> {formData.gradDate}</p>
          </div>
        </div>
      </section>

      {/* Professional Details */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Professional Details:-</h2>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Companies</h3>
          {formData.companies.map((company, index) => (
            <div key={index} className="mb-2">
              <p><strong>Company Name:</strong> {company.companyName}</p>
              <p><strong>Start Date:</strong> {company.startDate}</p>
              <p><strong>End Date:</strong> {company.endDate}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-lg font-semibold">Education:-</h3>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-2">
              <p><strong>Name:</strong> {edu.education}</p>
              <p><strong>Start Date:</strong> {edu.enrollDate}</p>
              <p><strong>End Date:</strong> {edu.graduation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experiences */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Experiences</h2>
        <div>
          <p><strong>Science:</strong> {formData.Experiences.science.join(', ')}</p>
          <p><strong>Engineering:</strong> {formData.Experiences.Engineering.join(', ')}</p>
          <p><strong>Software:</strong> {formData.Experiences.software.join(', ')}</p>
        </div>
      </section>

      {/*About me & ABout Experience */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          {/* About Me */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">About Me:</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-800">{formData.about}</p>
            </div>
          </section>
        </div>

        <div>
          {/* About Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">About Experience:</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-800">{formData.experience}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
