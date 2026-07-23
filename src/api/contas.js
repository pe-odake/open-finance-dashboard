import api from "./api";

export async function listarContas() {
    const response = await api.get("/contas");
    return response.data;
}

export async function criarConta(dadosConta) {
    const response = await api.post("/contas", dadosConta);
    return response.data;
}