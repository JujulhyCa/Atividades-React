import Contador from './componentes/Contador';
import { Link } from "react-router-dom";

export default function Ativ02(){
    return (
        
        <div>
            <h1>Atividade 02</h1>
            <Contador/>
            <br/>
            <Link to="/">Retornar à página inicial</Link>
        </div>
        
       
    );
}