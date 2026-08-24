import { Link } from 'react-router-dom'

function Sobre(){

    return(
        <div>
            <h1>Página Sobre</h1>
            <p>Bem vindos ao meu site</p>
             <Link to="/"> ir para pagina sobre </Link>
            <Link to="/Produto"> ir para pagina sobre </Link>
            <Link to="/Contato"> ir para pagina sobre </Link>
            <img src="/hero.png" alt="logo" width={150} height={150} />
        </div>
    );
}

export default Sobre;