import { Container } from './styles';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Mark from '../../components/Mark';

function Create() {
    return (
        <Container>
            <Header />
            <main>
                <Link to='/'>
                    <FiArrowLeft />
                    voltar
                </Link>

                <h2>Novo filme</h2>

                <form>
                    <div className='flex'>
                        <Input placeholder='Título' type='text' />
                        <Input placeholder='Sua nota (de 0 a 5)' type='text' />
                    </div>
                    <textarea placeholder='Observações' />
                    <div>
                        <h3>Marcadores</h3>
                        <div className='mark-inputs'>
                            <Mark value='Ficção Científica' />
                            <Mark />
                        </div>
                    </div>
                    <div className='flex'>
                        <Button
                            title='Excluir filme'
                            mode='dark'
                            type='button'
                        />
                        <Button title='Salvar alterações' type='submit' />
                    </div>
                </form>
            </main>
        </Container>
    );
}

export default Create;
