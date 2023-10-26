import { Container } from './styles';
import { FiX, FiPlus } from 'react-icons/fi';

/* eslint-disable */
function Mark({ value }) {
    return (
        <Container $mode={value}>
            <input
                type='text'
                value={value}
                readOnly={value}
                placeholder='Novo marcador'
            />
            <button type='button'>{value ? <FiX /> : <FiPlus />}</button>
        </Container>
    );
}

export default Mark;
