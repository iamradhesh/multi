import React,{useState,useEffect} from 'react'

const Engineering = ({handleInputChange,activeTab}) => {
  const [checkedSkills, setCheckedSkills] = useState([]);
  const checkList = ['C++', 'Ruby', 'Java', 'Python', 'JavaScript', 'R', 'Kotlin', 'SQL', 'PHP', 'AngularJS', 'NodeJS', 'ExpressJS', 'Git', 'Sublime', 'C'];

  useEffect(() => {
    handleInputChange('Engineering', checkedSkills, null, null, null);
  }, [checkedSkills]);


  const handleChange = (e) => {
    const checkedSkill = e.target.value;
    if (e.target.checked) {
      setCheckedSkills((prevSkills) => [...prevSkills, checkedSkill]);
    } else {
      setCheckedSkills((prevSkills) => prevSkills.filter(skill => skill !== checkedSkill));
    }
    handleInputChange('Engineering',checkedSkills,null,null,null);
  };


  return (
    <div>
        <h2>Chose Your Skills Here</h2>
        <ul className='grid grid-cols-3 grid-rows-3'>
            {checkList.map((item,index)=>{
                return (<li>
                        <label htmlFor={index}>{item}</label>
                        <input className='ml-2' type="checkbox" name={item} value={item} id={index} onChange={handleChange}/>
                </li>);
            })}
        </ul>


    </div>
  )
}

export default Engineering;
