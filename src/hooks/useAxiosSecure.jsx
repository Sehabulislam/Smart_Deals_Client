// import axios from "axios";
// import useAuth from "./useAuth";

import axios from "axios"
import useAuth from "./useAuth"

// const axiosInstance = axios.create({
//     baseURL : "http://localhost:5000"
// })

// const useAxiosSecure = () => {
//     const {user} = useAuth();
//     //set token in header for all api call using axiosSecure hook
//     axiosInstance.interceptors.request.use((config)=>{
//         console.log(config);
//         config.headers.authorization = `Bearer ${user.accessToken}`;
//         return config;
//     })

//     return axiosInstance
// };

// export default useAxiosSecure;

const instance = axios.create({
    baseURL : "http://localhost:5000"
})
const useAxiosSecure = () =>{
    const {user} = useAuth();
    //request interceptor
    instance.interceptors.request.use((config)=>{
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    })

    return instance;

}

export default useAxiosSecure;