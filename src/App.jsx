// src/App.jsx
import ListaFutbolistas from './components/ListaFutbolistas';
import AgregarFutbolista from './components/AgregarFutbolista';

function App() {
  return (
    <div>
      <h1>Gestión de Futbolistas</h1>
      <AgregarFutbolista />
      <ListaFutbolistas />
    </div>
  );
}

export default App;
