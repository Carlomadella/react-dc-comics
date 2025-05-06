import comics from '../../comics.js';
import ComicCard from './ComicCard.jsx';

const ListComics = () => {
    return (
        <div id="fumetti">
            <div className="comics-container">
                <ComicCard src={comics[0].thumb} title={comics[0].series}/>
                <ComicCard src={comics[1].thumb} title={comics[1].series}/>
                <ComicCard src={comics[2].thumb} title={comics[2].series}/>
                <ComicCard src={comics[3].thumb} title={comics[3].series}/>
                <ComicCard src={comics[4].thumb} title={comics[4].series}/>
                <ComicCard src={comics[5].thumb} title={comics[5].series}/>
                <ComicCard src={comics[6].thumb} title={comics[6].series}/>
                <ComicCard src={comics[7].thumb} title={comics[7].series}/>
                <ComicCard src={comics[8].thumb} title={comics[8].series}/>
                <ComicCard src={comics[9].thumb} title={comics[9].series}/>
                <ComicCard src={comics[10].thumb} title={comics[10].series}/>
                <ComicCard src={comics[11].thumb} title={comics[11].series}/>
            </div>
        </div>
    )
}

export default ListComics;

