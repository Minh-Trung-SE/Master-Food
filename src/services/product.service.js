import axios from "axios"
import { API_URL } from "../constants/api.constant"

export const getProducts = async () => {
    return await axios.get(`${API_URL}/product`)
}