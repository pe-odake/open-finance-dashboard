import api from "./api";

export async function listarTransacoes(paginaAtual) {
    const response = await api.get(`/transacoes?page=${paginaAtual}`);
    return response.data;
}