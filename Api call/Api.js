import axios from "axios";


const api = axios.create({
    baseURL: "https://prakriti-backend-6c4u.onrender.com"
});
export default api;