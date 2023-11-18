import React, {useState} from 'react'
import { Form, Link, useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
 
const Login = (props) => {

//    localStorage.setItem
//    localStorage.get

   const [formData, setFormData] = useState({
      email: '',
      password: ''
   })

   const navigate = useNavigate()

   const handleChange = ((e) => {
      const {name, value} = e.target
      setFormData({
         ...formData,
         [name]: value
      })
   })

   const handleLogin = async (e) => {
      try {
         const res = await axios({
            method: 'post',
            url: "https://eventfull-backend.onrender.com/token/login/",
            data: formData,
            // config: { headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${url_token}` }}
            config: { headers: { 'Content-Type': 'application/json' }}
         })
         
         if (res.data?.auth_token) {
            localStorage.setItem("token", res.data.auth_token)
            navigate('/');
          } else {
            alert('Invalid credentials. Please try again.');
          }
      } catch (error) {
         console.error(error)
      }
   }

   return (
   <div className="auth">
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
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
        <button type="submit" className='text-sky-500 border-solid border-2 hover:animate-pulse'>Login</button>
      </Form>
      <Link to="/signup" className="link-btn text-sky-500">Need a new account? Signup here.</Link>
    </div>
   )
 }
 
 export default Login