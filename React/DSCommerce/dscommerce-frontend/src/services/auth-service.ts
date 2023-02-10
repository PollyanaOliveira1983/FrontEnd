import { AxiosRequestConfig } from "axios";
import QueryString from "qs";
import { AccessTokenPayloadDTO, CredentialsDTO, RoleEnum } from "../models/auth";
import { requestBackend } from "./requests";
import { CLIENT_SECRET, CLIENT_ID } from "../utils/system";
import * as accessTokenRepository from "../localstorage/acess-token-repository";
import jwtDecode from "jwt-decode";

export function loginRequest(loginData: CredentialsDTO) {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  const requestBody = QueryString.stringify({
    ...loginData,
    grant_type: "password",
  });

  const config: AxiosRequestConfig = {
    method: "POST ",
    url: "/oauth/token",
    data: requestBody,
    headers,
  };

  return requestBackend(config);
}

export function logout() {
  accessTokenRepository.remove();
}

export function saveAccessToken(token: string) {
  accessTokenRepository.save(token);
}

export function getAccessToken() {
  return accessTokenRepository.get();
}

export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {
  try {
    const token = accessTokenRepository.get();
    return token == null
      ? undefined
      : (jwtDecode(token) as AccessTokenPayloadDTO);
  } catch (error) {
    return undefined;
  }
}

export function isAuthenticated(): boolean {
  let tokenPayload = getAccessTokenPayload();
  if (tokenPayload && tokenPayload.exp * 1000 > Date.now()) {
    return true;
  }

  return false;
}

export function hasAnyRoles(roles: RoleEnum[]): boolean {
  if (roles.length === 0) {
    return true;
  }
  const tokenPayload = getAccessTokenPayload();
  if (tokenPayload !== undefined) {
    for (var i = 0; i < roles.length; i++) {
      if (tokenPayload.authorities.includes(roles[i])) {
        return true;
      }
    }
    //return roles.some(role => tokenData.authorities.includes(role));
  }
  return false;
}
