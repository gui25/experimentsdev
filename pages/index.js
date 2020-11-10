import { useState } from 'react';
import dbjson from 'loop.json';

function Home(){
    return (
        <div>
        <div>Contador</div>
        <Contador />
        <div>{dbjson}</div>
        </div>
        
        
    )
}

    function Contador(){
        const [contador,setContador] = useState(1);

        function adicionarContador(){
            setContador(contador + 1);
        }

        return (
            <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
            </div>
        )
    }
  
export default Home