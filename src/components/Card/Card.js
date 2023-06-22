import styles from './Card.module.scss';
import { useDispatch } from "react-redux";
import {toggleCardFavorite} from "../../redux/actions";

const Card = ({id, isFavorite, title}) => {
    const dispatch = useDispatch();

    const handleClick = e => {
        e.preventDefault();
        console.log(id);
        dispatch(toggleCardFavorite(id));
    };

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
        </li>
    );
};

export default Card;
