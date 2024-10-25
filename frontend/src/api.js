import axios from "axios"
import { ACCESS_TOKEN } from "./constants"


// Create an Axios instance with a predefined base URL.
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});


// Add a request interceptor to the Axios instance.
// Interceptors allow you to run your code or modify the request before it is sent.
api.interceptors.request.use(
    (config) => {
        // Retrieve the JWT access token from localStorage.
        const token = localStorage.getItem(ACCESS_TOKEN);
        
        // If a token is found, add it to the Authorization header of the request.
        if (token) {
            // The token is added as a Bearer token, which is the standard format for sending JWTs.
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    }, 
    (error)=>{
        return Promise.reject(error)
    }
)

export default api