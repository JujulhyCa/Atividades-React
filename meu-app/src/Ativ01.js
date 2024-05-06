import Relogio from './componentes/relogio';
import { Link } from "react-router-dom";

export default function Ativ01(){
    return (
        
        <div>
            <h1>Atividade 01</h1>
            <Relogio/>
            <br/>
            <Link to="/">Retornar à página inicial</Link>
        </div>
        
       
    );
}