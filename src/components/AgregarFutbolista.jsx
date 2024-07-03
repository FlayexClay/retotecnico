import { useState, useEffect } from 'react';
import { crearFutbolista, obtenerTodasLasPosiciones } from '../services/api';
import './AgregarFutbolista.css'; // Importar el archivo CSS aquí

const AgregarFutbolista = () => {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [caracteristicas, setCaracteristicas] = useState('');
  const [posicionId, setPosicionId] = useState('');
  const [posiciones, setPosiciones] = useState([]);

  useEffect(() => {
    const fetchPosiciones = async () => {
      try {
        const response = await obtenerTodasLasPosiciones();
        setPosiciones(response.data);
      } catch (error) {
        console.error('Error al obtener posiciones:', error);
      }
    };
    fetchPosiciones();
  }, []);

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearFutbolista({
        nombres,
        apellidos,
        fechaNacimiento,
        caracteristicas,
        posicion: { id: posicionId },
      });
      alert('Futbolista creado exitosamente');
      // Limpiar el formulario
      setNombres('');
      setApellidos('');
      setFechaNacimiento('');
      setCaracteristicas('');
      setPosicionId('');
    } catch (error) {
      console.error('Error al crear futbolista:', error);
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombres}
          onChange={(e) => setNombres(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Apellido:</label>
        <input
          type="text"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Fecha de Nacimiento:</label>
        <input
          type="date"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Características:</label>
        <textarea
          value={caracteristicas}
          onChange={(e) => setCaracteristicas(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label>Posición:</label>
        <select
          value={posicionId}
          onChange={(e) => setPosicionId(e.target.value)}
          required
        >
          <option value="">Selecciona una posición</option>
          {posiciones.map((posicion) => (
            <option key={posicion.id} value={posicion.id}>
              {posicion.nombre}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Agregar Futbolista</button>
    </form>
  );
};

export default AgregarFutbolista;
