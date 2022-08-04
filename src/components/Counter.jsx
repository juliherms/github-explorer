import { useState } from "react";


//conceito da imutabilidade
//convencional:
// usuarios = ['diego3g','diegosf','danilosf']
// usuarios.push('rafacamarda')

// novosUsuarios = [...usuarios, 'radacamarda'] -> isso eh uma forma de adicionar sem mudar a variavel

export function Counter() {
    const  [counter, setCounter] = useState(0);

    function increment() {
        //conceito e imutabilidade
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    )
}