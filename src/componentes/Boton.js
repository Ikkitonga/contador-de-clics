import React from "react";
import '../Hojas-De-Estilos/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClic }) {
    return (
        <button className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
        onClick={manejarClic}>
            {texto}
        </button>
    )
}

export default Boton;

// className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} operador ternario
// depende de si esBotonDeClic es true va a dar una clase o la otra