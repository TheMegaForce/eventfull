import React, {useState} from 'react'
import { Form, Link, useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    re_password: '',
 })

//  const user = useLoaderData()

 const navigate = useNavigate()

 const handleChange = ((e) => {
    const {name, value} = e.target
    setFormData({
       ...formData,
       [name]: value
    })
 })

 const handleSignup = async (e) => {
  try {
    const res = await axios.post('https://eventfull-backend.onrender.com/users/', formData);
    
    if (res.data) {
      navigate('/login');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  } catch (error) {
    alert(error.response.data.message)
    console.error('Registration error: ', error.response.data.message);
  }}

  return (
   <div className="auth">
      <h2>Signup</h2>
      <Form onSubmit={handleSignup} className='flex flex-col'>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="re_password"
          placeholder="Re Password"
          value={formData.re_password}
          onChange={handleChange}
        />
        <button type="submit" className='text-sky-500 border-solid border-2 hover:animate-pulse'>Signup</button>
      </Form>
      <br/>
     <Link to="/login" className="link-btn">Already have an account? Login here.</Link>
    </div>
  )
}

export default Signup