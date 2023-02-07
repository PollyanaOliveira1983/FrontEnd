import { CredentialsDTO } from "../models/auth";
import { CLIENT_SECRET, CLIENT_ID } from "../utils/system";

export function loginRequest(loginData: CredentialsDTO) {
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }

    console.log(headers);
}        