import api from "./api";

export async function login(loginData) {
    const response = await api.post("/auth/login", loginData);
    return response.data;
}

export async function register(registerData) {
    console.log(registerData);
    const response = await api.post("/auth/registrar", registerData);
    return response.data;
}