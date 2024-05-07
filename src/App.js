import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.svg.png';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import { useState } from 'react';




function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='logo de freecodecamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />

        <Boton
          texto='clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />

        <Boton
          texto='reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
