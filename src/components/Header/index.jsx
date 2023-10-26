import { Link } from 'react-router-dom';
import { Container, UserInfo } from './styles';
import Input from '../Input';

/* eslint-disable */
function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder='Pesquisar pelo título' />
            <UserInfo>
                <div>
                    <Link to='/profile'>Marcos Parreiras</Link>
                    <button>sair</button>
                </div>
                <Link to='/profile'>
                    <img src='https://github.com/marcosparreiras.png' />
                </Link>
            </UserInfo>
        </Container>
    );
}

export default Header;
