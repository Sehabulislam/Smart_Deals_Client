import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <div className='flex justify-center items-center min-h-[50vh]'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    }
    if(user){
        return children;
    }
    return  <Navigate to="/login" state={location?.pathname} replace></Navigate>
};

export default PrivateRoute;