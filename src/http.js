import axios from "axios";

const baseURL = "https://blogim.onrender.com";

const http = axios.create({
    baseURL: baseURL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    }
})




export default http;