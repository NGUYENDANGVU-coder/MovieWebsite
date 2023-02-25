import React, { useEffect, useRef, useState } from 'react';
import './search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import MovieItemSearch from '../movieItemSearch/MovieItemSearch';
import tmdbApi, { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import useDebounce from '../hooks/useDebounce';
const Search = () => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [showSearch, setShowSearch] = useState(true)
    const delayedSearch = useDebounce(inputValue, 800);
    const inputRef = useRef();
    useEffect(() => {
        if (!delayedSearch.trim()) {
            setResult([]);
            return;
        }
        const params = {
            api_key: apiConfig.apiKey,
            query: delayedSearch,
        }
        const seachMovie = async () => {
            setLoading(true);
            const res = await tmdbApi.search(category.movie, { params });
            setResult(res.data.results.slice(0, 5))
            setLoading(false);
        }
        seachMovie();
        
    }, [delayedSearch]);
    const handleInput = (e) => {
        const inputValue = e.target.value
        if (!inputValue.startsWith(' ')) {
            setInputValue(inputValue);
        }
    }
    const handleDel = () => {
        setInputValue('');
        setResult([]);
        inputRef.current.focus();
    }
    return (
        <Tippy
            interactive
            visible={showSearch && result.length > 0}
            placement='bottom'
            onClickOutside={() => { setShowSearch(false) }}
            render={(attrs) => (
                <div className="search-result" tabIndex="-1" {...attrs}>
                    {
                        result.map((item, index) => {
                            return (
                                <MovieItemSearch key={index} video={item} />
                            )
                        })
                    }
                </div>
            )}
        >
            <div className='search'>
                <input
                    onFocus={()=>{setShowSearch(true)}}
                    placeholder='Search movies and tivi'
                    className='search__input'
                    value={inputValue}
                    onChange={handleInput}
                    ref={inputRef}
                ></input>
                {

                    !!inputValue && !loading && (
                        <button className="close-input" onClick={handleDel}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )
                }
                {
                    loading && (
                        <FontAwesomeIcon className="load-input" icon={faSpinner} />
                    )
                }
                <button className='search-btn'>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
