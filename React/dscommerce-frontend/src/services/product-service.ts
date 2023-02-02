import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";

export function findAll() {

    const config : AxiosRequestConfig = {
        
    }
    
    return axios.get(`${BASE_URL}/products?size=12`);
}

export function findById(id: number) {
    return axios.get(`${BASE_URL}/products/${id}`);
}

