import List from '../List/List';
import './searchHistory.css';


export default function SearchHistory(props)  {
    const {terms} = {...props};
    let formattetData = terms.map((item, index) => {
        return {
            ref: index,
            title: item,
            txt: null
        }
    });
    
    return (
        <div className="history">
            <List data={formattetData} />
        </div>
    );
}