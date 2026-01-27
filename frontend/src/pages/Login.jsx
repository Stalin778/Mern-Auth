import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';




const Login = () => {
    const [formdata, setFormdata] = useState({ email: '', password: '' });
    const [error,setError]=useState('');
    const navigation=useNavigate();

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
    };

    const handleSubmit =async(e) => {
        e.preventDefault();
        try{
            const res=await axios.post('http://localhost:8085/auth/login',formdata);
            localStorage.setItem('token',res.data.token);
            console.log("somethin hit here");
         
            navigation('/profile');
        }
        catch(err){
            console.log("something hit here");
            setError(err.response.data.message || "server unreachable");
      

        }

        
    };

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Login
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formdata.email}
                            placeholder="Enter email"
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formdata.password}
                            placeholder="Enter password"
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="error">{error}</div>
                    <button
                        type='submit'
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
