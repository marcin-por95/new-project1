import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavorite } from '../../redux/cardsRedux';


const Favorite = () => {
    const favoriteLists = useSelector(getFavorite);
    if (favoriteLists.length === 0) {
        return (
            <div>
                <PageTitle>No cards…Yet.</PageTitle>
            </div>
        );
    }
    return (
        <div>
            <PageTitle>favorite cards</PageTitle>
            <div className={ styles.container }>
                <ul className={ styles.favoriteLists }>
                    { favoriteLists.map(card => <Card key={ card.id } {...card} />) }
                </ul>
            </div>

        </div>
    )

}

export default Favorite;