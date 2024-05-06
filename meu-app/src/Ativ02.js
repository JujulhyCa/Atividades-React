import Letreiro from './componentes/letreiro';
import { Link } from "react-router-dom";

export default function Ativ02(){
    return (
        
        <div>
            <h1>Atividade 02</h1>
            <Letreiro/>
            <br/>
            <Link to="/">Retornar à página inicial</Link>
        </div>
        
       
    );
}