/* eslint-disable default-case */
import './searchResults.css';
import List from '../List/List';

export default function SearchResults(props)  {
    let {results, type} = {...props};

    let formattetData = results.map((item, index) => {
        let obj = {
            original: item
        }

        switch(type) {
            case 'films':
                obj.ref = item.episode_id;
                obj.title = item.title;
                obj.txt = item.release_date;
                break;
            case 'people':
                break;
            case 'planets':
                break;
        }
        return obj;
    })
    return(
        <div className="results">
            <List data={formattetData} />
        </div>
    );
}
