import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [form, setForm] = useState({username:'', email:'', password:''});
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) =>setForm({...form, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await axios.post('http://localhost:5000/api/signup', form);
            setMessage(res.data.message);
        }
        catch(err){
            setMessage(err.response?.data?.message || 'user already exist');
        }
    }
  return (
    <div className="flex items-center justify-center  h-screen bg-gray-100">
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg space-y-4 w-96">
      <h2 className="text-xl font-bold text-center">Sign Up</h2>
      <input type="text" name="username" placeholder="Name" value={form.username} onChange={handleChange} required className="input border-1 border-black rounded justify-self-center flex" />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="input border-1 border-black rounded justify-self-center flex" />
      <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required className="input border-1 border-black rounded justify-self-center flex" />
      <button type="submit" className="btn border-1 border-green-600 rounded bg-green-400 flex items-center justify-self-center">Create Account</button>
      {message && <p className="text-center text-sm text-red-500">{message}</p>}
    </form>
    <button onClick={()=>navigate('/login')}
    className='underline'  
    >Already account? Login</button>
  </div>
  )
}

export default Signup

