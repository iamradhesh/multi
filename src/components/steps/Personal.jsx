import React ,{useState}from 'react'
import { useContext } from 'react'
import { stepperContext } from '../contexts/stepperContext'
const Personal = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form data submitted:', formData);
      };
      
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      return (
        <div className="App">
          <h1>Simple React Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            
          </form>
        </div>
      );
}

export default Personal
