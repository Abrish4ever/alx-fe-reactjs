
import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const handleChange= (e)=> {
    const {name, value }= e.target;
    setFormData(preveState=>({...preveState, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      console.error('Please fill in all fields');
      return;
    }
    // Simulate form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input 
        type="text" 
        name="username" 
        value={formData.username} 
        onChange={handleChange} 
      /><br />

      <label htmlFor="email">Email: </label>
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange}
      /><br />

      <label htmlFor="password">Password: </label>
      <input 
        type="password" 
        name="password" 
        value={formData.password} 
        onChange={handleChange} 
      /><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;