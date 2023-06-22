import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import {addColumnAction} from '../../redux/actions';
import styles from './ColumnForm.module.scss';

const ColumnForm = ({listId, isFavorite}) => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addColumnAction({ title, icon, listId, isFavorite }));
        setTitle('');
        setIcon('');
    };

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span>Title:</span> <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
            <span>Icon:</span> <TextInput value={icon} onChange={(e) => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;
