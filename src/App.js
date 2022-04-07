import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
// import SearchHistory from './components/SearchHistory/SearchHistory';
import Main from './components/Main/Main';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function App(props) {
    const name = "Company Name";
    const {pathname} = useLocation();
    const [page, setPage] = useState(pathname);
    const [keyword, setKeyword] = useState('');
    function saveSearch(term) {
        setKeyword(term);
    }

    useEffect(()=> {
        // see if /planets => /films change keyword
        // if /planets => /planets/5 dont change keyword
        let newPath = pathname.split('/')[1];
        let oldPath = page.split('/')[1];
        if(newPath !== oldPath) {
            setPage(pathname);
            setKeyword('');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <div className="App" >
            <Header company={name} />
            <SearchBar keyword={keyword} saveSearch={saveSearch} />
            <main className='content'>
                <Main keyword={keyword}/>
            </main>
        </div>
    );
}