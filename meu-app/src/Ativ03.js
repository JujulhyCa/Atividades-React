import Botao from './components/Letreiro';
import { Link } from "react-router-dom";

export default function Atv03(){
    return (
        
        <div>
            <h1>Atividade 03</h1>
            <Botao/>
            <br/>
            <Link to="/">Retornar à página inicial</Link>
        </div>
        
       
    );
}
