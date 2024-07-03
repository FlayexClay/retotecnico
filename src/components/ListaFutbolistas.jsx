import  { useEffect, useState } from 'react';
import { obtenerTodosLosFutbolistas, obtenerFutbolistaPorId } from '../services/api';
import './ListaFutbolistas.css'; // Importar el archivo CSS aquí

const ListaFutbolistas = () => {
  const [futbolistas, setFutbolistas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await obtenerTodosLosFutbolistas();
        setFutbolistas(response.data);
      } catch (error) {
        console.error('Error al obtener futbolistas:', error);
      }
    };
    fetchData();
  }, []);

  const verDetalles = async (id) => {
    try {
      const response = await obtenerFutbolistaPorId(id);
      const futbolista = response.data;
      alert(`
        Nombre: ${futbolista.nombres}
        Apellido: ${futbolista.apellidos}
        Fecha de Nacimiento: ${formatoFecha(futbolista.fechaNacimiento)}
        Características: ${futbolista.caracteristicas}
        Posición: ${futbolista.posicion.nombre}
      `);
    } catch (error) {
      console.error('Error al obtener los detalles del futbolista:', error);
    }
  };

  const formatoFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', options);
  };

  return (
    <div>
      <h1>Lista de Futbolistas</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de Nacimiento</th>
            <th>Características</th>
            <th>Posición</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {futbolistas.map(futbolista => (
            <tr key={futbolista.id}>
              <td>{futbolista.nombres}</td>
              <td>{futbolista.apellidos}</td>
              <td>{formatoFecha(futbolista.fechaNacimiento)}</td>
              <td>{futbolista.caracteristicas}</td>
              <td>{futbolista.posicion.nombre}</td>
              <td>
                <button onClick={() => verDetalles(futbolista.id)}>Ver Detalles</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaFutbolistas;
