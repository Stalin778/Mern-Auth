import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [isError,setIsError]=useState(false);
    const [formdata,setFormdata]=useState({username:'',email:'',password:''});
    const [message,setMessage]=useState('');
    const handleChange=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value});
    
    };
    const submitForm= async(e)=>{
        e.preventDefault();
        try{
            const res=await axios.post('http://localhost:8085/auth/register',formdata);
            
            setMessage("user registered succesfully");
            console.log(res.data.message);
            setIsError(false); 
            navigate('/login');
        }
        catch(e){   
           setMessage(e.response?.data?.message || "Server is unreachable");
            setIsError(true);

        }
    }
    
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-amber-50'><div className='inline-block bg-amber-100 p-10 rounded-2xl  '>
        <form onSubmit={submitForm} className="register_form ">
            <label className='block'>Name</label>
            <input className='border-2 border-amber-100 my-5 bg-white' type='text' placeholder='enter your name' name='username' value={formdata.username} onChange={handleChange} />
            <label className='block'>Email</label>
            <input className='border-2 border-amber-100 my-5 bg-white' type='email' placeholder='enter your email' name='email' value={formdata.email} onChange={handleChange} />
            <label className='block'>Password</label>
            <input className='border-2 border-amber-100 my-5 bg-white' placeholder='enter your password' type='password' name='password' value={formdata.password} onChange={handleChange} />
            {message && (
            <p
              className={`text-center pb-2 ${
                isError ? 'text-red-500' : 'text-green-700'
              }`}
            >
              {message}
            </p>
          )}
            <button  className='block mx-auto my-0 bg-amber-200 rounded-2xl px-5 py-2' type='submit'>Register</button>
            </form>
        </div></div>
  )
}

export default Register