import styles from './Card.module.scss';
import { useDispatch } from "react-redux";
import {toggleCardFavorite} from "../../redux/actions";
import clsx from "clsx";

const Card = ({id, isFavorite, title}) => {
    const dispatch = useDispatch();

    const handleClick = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(id));
    };

    const { isActive, button, buttons, card } = styles;
    return (
        <li className={card}>
            {title}
            <div className={buttons}>
                <button
                    onClick={handleClick}
                    className={clsx(button, !(isFavorite || isActive) && button)}
                >
                    <i className='fa fa-star-o' />
                </button>
            </div>
        </li>
    );
};

export default Card;
