import styles from './Card.module.scss';
import { useDispatch } from "react-redux";

import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
const Card = ({id, isFavorite, title}) => {
    const dispatch = useDispatch();

    const handleClick = e => {
        e.preventDefault();
        console.log(id);
        dispatch(toggleCardFavorite(id));
    };
    const removeClick = e => {
        e.preventDefault();
        dispatch(removeCard(id));
    }



    const { button, favorite, card } = styles;
    return (
        <li className={card}>
            {title}
                <button
                    onClick={handleClick}
                    className={button}
                >
                  {isFavorite ?
                    <i className={`fa fa-star ${favorite}`} /> :
                    <i className="fa fa-star-o" />
                  }
                </button>
            <button onClick={removeClick} className={styles.activeButton}>
                <i className={'fa fa-trash'} />
            </button>
        </li>
    );
};

export default Card;
