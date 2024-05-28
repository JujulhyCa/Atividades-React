import Relogio from './componentes/Relogio';
import Letreiro from './componentes/Letreiro';

import { Link } from "react-router-dom";

export default function Ativ01(){
    return (
        
        <div>
            <h1>Atividade 01</h1>
            <Relogio/>
            <Letreiro />
            <br/>
            <Link to="/">Retornar à página inicial</Link>
        </div>
        
       
    );
}
