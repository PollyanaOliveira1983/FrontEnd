import { TOKEN_KEY } from "../utils/system";

export function save(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
}

export function get() : string | null{
    return localStorage.getItem(TOKEN_KEY);
}

export function remove() {
    return localStorage.removeItem(TOKEN_KEY);
}