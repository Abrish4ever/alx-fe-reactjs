
import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setErrors]= useState('');
  const { username, email, password} = formData;
  const handleChange= (e)=> {
    const {name, value }= e.target;
    setFormData(preveState=>({...preveState, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setError('username field are required.');
      return;
    }
    if (!email) {
      setError('Email field are required.');
      return;
    }
    if (!password) {
      setError('Password field are required.');
      return;
    }
    // Simulate form submission
    console.log({ username, email, password });
    setError('');
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input 
        type="text" 
        name="username" 
        value={username} 
        onChange={handleChange} 
      /><br />

      <label htmlFor="email">Email: </label>
      <input 
        type="email" 
        name="email" 
        value={email} 
        onChange={handleChange}
      /><br />

      <label htmlFor="password">Password: </label>
      <input 
        type="password" 
        name="password" 
        value={password} 
        onChange={handleChange} 
      /><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;