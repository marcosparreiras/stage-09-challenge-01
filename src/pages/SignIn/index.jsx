import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Image from '../../assets/movie.jpg';

function SignIn() {
    return (
        <Container>
            <main>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <form>
                    <h2>Faça seu login</h2>
                    <Input type='text' placeholder='E-mail' icon={FiMail} />
                    <Input type='password' placeholder='Senha' icon={FiLock} />
                    <Button type='submit' title='Entrar' />
                </form>
                <Link to='/register'>Criar conta</Link>
            </main>
            <img src={Image} alt='Movie image' />
        </Container>
    );
}

export default SignIn;
