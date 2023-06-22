import styles from './CardForm.module.scss';
import {useState} from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import {useDispatch} from "react-redux";
import { addCardAction } from '../../redux/cardsRedux';

const CardForm = ({columnId, listId}) => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCardAction({title, columnId, listId: listId}));
        setTitle('');
    };

    return (
        <form className={styles.CardForm} onSubmit={handleSubmit}>
            <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <Button>Add card</Button>
        </form>
    );
};

export default CardForm;
