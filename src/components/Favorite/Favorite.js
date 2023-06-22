import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

import {toggleCardFavorite} from "../../redux/actions";



const Favorite = () => {
    const favoriteLists = useSelector(toggleCardFavorite);
        if (favoriteLists.length === 0){
            return (
                <div>
                    <PageTitle>No cards…Yet.</PageTitle>
                </div>
            );
        }
    return (
        <div>
            <PageTitle>favorite cards</PageTitle>
            <div className={styles.container}>
                <ul className={styles.favoriteLists}>
                    {favoriteLists.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} />)}
                </ul>
            </div>

        </div>
    )

}

export default Favorite;