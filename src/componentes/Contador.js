import React from "react";
import '../Hojas-De-Estilos/Contador.css'

function Contador({ numClics }) {
    return (
        <div className="contador">
            {numClics}
        </div>
    )
}

export default Contador;