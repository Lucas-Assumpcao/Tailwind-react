import { Link } from 'react-router-dom'

function Produto(){

    return(
        <div>
            <h1>Página Produto</h1>
            <p>Bem vindos ao meu site</p>
             <Link to="/Sobre"> ir para pagina sobre </Link>
            <Link to="/"> ir para pagina sobre </Link>
            <Link to="/Contato"> ir para pagina sobre </Link>
            <img src="/icons.svg" alt="logo" width={150} height={150} />
        </div>
    );
}

export default Produto;