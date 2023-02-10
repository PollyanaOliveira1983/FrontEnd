import { AxiosRequestConfig } from "axios";
import { requestBackend } from "./requests";

export function findMe() {

    const config : AxiosRequestConfig = {
        url: "/users/me",
        withCredentials: true

    }

    return requestBackend(config);
}


