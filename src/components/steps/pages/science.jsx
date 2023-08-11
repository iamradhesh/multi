import React, { useState, useEffect } from 'react';

const Science = ({ handleInputChange,activeTab }) => {
  const [checkedSkills, setCheckedSkills] = useState([]);
  const checkList = ['JQuery', 'Ruby', 'Java', 'Python', 'JavaScript', 'R', 'Kotlin', 'SQL', 'PHP', 'AngularJS', 'NodeJS', 'ExpressJS', 'Git', 'Sublime', 'C'];

  useEffect(() => {
    handleInputChange('science', checkedSkills, null, null, null);
  }, [checkedSkills]);


  const handleChange = (e) => {
    const checkedSkill = e.target.value;
    if (e.target.checked) {
      setCheckedSkills((prevSkills) => [...prevSkills, checkedSkill]);
    } else {
      setCheckedSkills((prevSkills) => prevSkills.filter(skill => skill !== checkedSkill));
    }
    //handleInputChange('science',checkedSkills,null,null,null);
  };

  return (
    <div>
      <h2>Choose Your Skills Here</h2>
      <ul className='grid grid-cols-3 grid-rows-3'>
        {checkList.map((item, index) => (
          <li key={index}>
            <label htmlFor={index}>{item}</label>
            <input key={item} className='ml-2' type="checkbox" name={item} value={item} id={index} onChange={handleChange} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Science;
