import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Image from '../../assets/movie.jpg';

function SignUp() {
    return (
        <Container>
            <main>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <form>
                    <h2>Crie sua conta</h2>
                    <Input type='text' placeholder='Nome' icon={FiUser} />
                    <Input type='text' placeholder='E-mail' icon={FiMail} />
                    <Input type='password' placeholder='Senha' icon={FiLock} />
                    <Button type='submit' title='Entrar' />
                </form>
                <Link to='/login'>
                    <FiArrowLeft />
                    Voltar para o login
                </Link>
            </main>
            <img src={Image} alt='Movie image' />
        </Container>
    );
}

export default SignUp;
