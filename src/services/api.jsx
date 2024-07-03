import axios from 'axios';

const API_URL = 'http://localhost:8080/api/futbolistas';
const API_POSICIONES_URL = 'http://localhost:8080/api/posiciones/';

export const obtenerTodosLosFutbolistas = () => axios.get(API_URL);
export const obtenerFutbolistaPorId = (id) => axios.get(`${API_URL}/${id}`);
export const crearFutbolista = (futbolista) => axios.post(API_URL, futbolista);
export const actualizarFutbolista = (id, futbolista) => axios.put(`${API_URL}/${id}`, futbolista);
export const eliminarFutbolista = (id) => axios.delete(`${API_URL}/${id}`);
export const obtenerTodasLasPosiciones = () => axios.get(API_POSICIONES_URL);
