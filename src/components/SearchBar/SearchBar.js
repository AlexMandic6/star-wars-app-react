import './searchBar.css';
import { createRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar(props) {
    const {keyword, category } = props;
    let inputRef = createRef();  // container for a DOM element
    const navigate = useNavigate();

    function submitted(e) {
        e.preventDefault();
        navigate(`/${category}?search=${inputRef.current.value}`);
        // saveSearch(inputRef.current.value);
    }

    useEffect(() => {
        //initial load plus if keyword in App changes
        inputRef.current.value = keyword;
    }, [keyword, inputRef]);

    return (
        <section className="searchBar">
            <form onSubmit={submitted}>
                <input 
                    type="text" 
                    ref={inputRef}
                    name="keyword" 
                    className="searchText" 
                    placeholder="keyword"
                />
                <button type="submit" className="searchBtn" name="searchBtn">Search</button>
            </form>
            {props.term && <p>You searched for: {props.term}</p>}
        </section>
    );
}