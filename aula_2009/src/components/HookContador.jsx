import React, {useState} from 'react';

function incrementarContador(){
    const[count, setCount] = useState(1);

    return(
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}> Clique Aqui </button>
        </div>
    );
    
}

export default incrementarContador;