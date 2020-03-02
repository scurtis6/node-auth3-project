import axios from "axios";
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0IiwiaXNfc3R5bGlzdCI6dHJ1ZSwiaWF0IjoxNTgxNDI4MzAxLCJleHAiOjE1ODE1MTQ3MDF9.JrwqE9GjBHDQMXOGsroVAYtj22_IdC7dnajEXr0iLgA"
const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    console.log(token)
    return axios.create({
        // "Content-Ttype": "application/json",
        baseURL: "https://localhost:5000/api",
        headers: {
            Authorization: token 
        }
    });
};

export default axiosWithAuth;