import comics from '../../comics.js';
import ComicCard from './ComicCard.jsx';

const ListComics = () => {
    return (
        <div id="fumetti">
            <div className="comics-container">
                <ComicCard src={comics[0].thumb} title={comics[0].series}/>
            </div>
        </div>
    )
}

export default ListComics;

