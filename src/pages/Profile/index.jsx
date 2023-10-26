import { Container } from './styles';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';

function Profile() {
    return (
        <Container>
            <header>
                <Link to='/'>
                    <FiArrowLeft /> Voltar
                </Link>
            </header>
            <form>
                <div className='form-header'>
                    <img
                        src='https://github.com/marcosparreiras.png'
                        alt='User image'
                    />
                    <label htmlFor='file-input'>
                        <FiCamera />
                        <input type='file' id='file-input' />
                    </label>
                </div>
                <Input placeholder='Nome' type='text' icon={FiUser} />
                <Input placeholder='E-mail' type='text' icon={FiMail} />
                <Input
                    placeholder='Senha atual'
                    type='password'
                    icon={FiLock}
                />
                <Input placeholder='Nova senha' type='password' icon={FiLock} />
                <Button title='Salvar' />
            </form>
        </Container>
    );
}

export default Profile;
