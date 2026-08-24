import { Link } from 'react-router-dom'

function Home(){

    return(
        <div>
            <h1>Página Home</h1>
            <p>Bem vindos ao meu site</p>
            <Link to="/Sobre"> ir para pagina sobre </Link>
            <Link to="/Produto"> ir para pagina sobre </Link>
            <Link to="/Contato"> ir para pagina sobre </Link>
           <img src="/favicon.svg" alt="logo" width={150} height={150} />
        </div>
    );
}

export default Home;