import { AxiosRequestConfig } from "axios";
import { OrderDTO } from "../models/order";
import { requestBackend } from "./requests";

export function findByIdRequest(id: number) {

    const config : AxiosRequestConfig = {
        url: `/orders/${id}`,
        withCredentials: true,
    }

    return requestBackend(config);

}

export function placeOrderRequest(cart : OrderDTO){
    
    const config : AxiosRequestConfig = {
        url: `/orders`,
        method: "POST",
        withCredentials: true,
        data: cart
    }

    return requestBackend(config);    
}