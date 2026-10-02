import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api"
});

// Get all products
export const getProducts = () => {
    return API.get("/products");
};

export default API;