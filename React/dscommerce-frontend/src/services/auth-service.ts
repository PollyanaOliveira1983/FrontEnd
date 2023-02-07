import QueryString from "qs";
import { CredentialsDTO } from "../models/auth";
import { CLIENT_SECRET, CLIENT_ID } from "../utils/system";

export function loginRequest(loginData: CredentialsDTO) {
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }

    const requestBody = QueryString.stringify({...loginData, grant_type: "password"})

    console.log(requestBody);
}        