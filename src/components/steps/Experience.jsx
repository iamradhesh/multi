import React, { useState } from 'react';
import Software from './pages/software'; // Update the component file paths
import Science from './pages/science'; // Update the component file paths
import Engineering from './pages/Engineering'; // Update the component file paths

function Experience({ handleInputChange }) {
  const [activeTab, setActiveTab] = useState("Computer Software");

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="Tabs w-full max-w-md border rounded-md shadow-md bg-white">
        {/* Tab nav */}
        <ul className="flex justify-center space-x-2 p-4 bg-blue-500 text-white">
          <li className={`cursor-pointer py-2 px-4 rounded-md ${activeTab === "Computer Software" ? "bg-blue-700" : "hover:bg-blue-700"}`} onClick={() => handleTab("Computer Software")}>Computer Software</li>
          <li className={`cursor-pointer py-2 px-4 rounded-md ${activeTab === "Computer Science" ? "bg-blue-700" : "hover:bg-blue-700"}`} onClick={() => handleTab("Computer Science")}>Computer Science</li>
          <li className={`cursor-pointer py-2 px-4 rounded-md ${activeTab === "engineering" ? "bg-blue-700" : "hover:bg-blue-700"}`} onClick={() => handleTab("engineering")}>Engineering</li>
        </ul>

        <div className="outlet p-4">
          {activeTab === "Computer Software" ? <Software handleInputChange={handleInputChange} activeTab={activeTab} /> : activeTab === "Computer Science" ? <Science handleInputChange={handleInputChange} activeTab={activeTab} /> : <Engineering handleInputChange={handleInputChange} activeTab={activeTab} />}
        </div>
      </div>
    </div>
  );
}

export default Experience;
