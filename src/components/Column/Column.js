import styles from './Column.module.scss';
import Card from "../Card/Card";
import { getFilteredCards } from '../../redux/store';
import CardForm from "../CardForm/CardForm";
import {useSelector} from "react-redux";

const Column = ({icon, id, title}) => {
    const cards = useSelector(state => getFilteredCards(state, id));
    console.log('Column render');
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + icon}/>{title}</h2>
            <ul className={styles.cards}>
                {cards.map((card) => (
                    <Card key={card.id} title={card.title}/>
                ))}
            </ul>
            <CardForm columnId={id}/>
        </article>
    );
};

export default Column;
