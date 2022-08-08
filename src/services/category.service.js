import axios from "axios"
import {API_URL} from "../constants/api.constant.js"

export const getCategories = async () => {
    return await axios.get(`${API_URL}/category`);
}