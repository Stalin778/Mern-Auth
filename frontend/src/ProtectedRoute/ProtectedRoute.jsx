import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'
import {jwtDecode} from 'jwt-decode';

const ProtectedRoute = ({children}) => {
    const token=localStorage.getItem('token');
    if(token){
        try{
            const decoded=jwtDecode(token);
            const currentTime=Date.now()/1000;
            if(decoded.exp>currentTime){
                return children;
            }
            else{
                localStorage.removeItem('token');
            }
            
        }
        catch(err){
            console.error('invalid token',error);

        }
    }
    
  return <Navigate to='/login'/>;
}

export default ProtectedRoute;