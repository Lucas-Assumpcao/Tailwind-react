import { Link } from 'react-router-dom'

function Contato(){

    return(
        <div>
            <h1>Página Contato</h1>
            <p>Bem vindos ao meu site</p>
             <Link to="/Sobre"> ir para pagina sobre </Link>
            <Link to="/Produto"> ir para pagina sobre </Link>
            <Link to="/"> ir para pagina sobre </Link>
            <img src="/images.png" alt="logo" width={150} height={150} />
        </div>
    );
}

export default Contato;