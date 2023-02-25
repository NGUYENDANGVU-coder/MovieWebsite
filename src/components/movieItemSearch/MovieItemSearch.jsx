import React from 'react';
import { Link } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';
import { category } from '../../api/tmdbApi';
import './MovieItemSearch.scss'
const MovieItemSearch = ({video}) => {
    const link='/'+category.movie+'/'+video.id;
    const bg = apiConfig.imgW500(video.poster_path || video.backdrop_path);
    return (
        <Link to={link}>
            <div className='seach__container' >
                <img className='seach__container__img' src={bg} alt='img-avt'/>
                <div className='seach__container__infor'>
                    <p className='title__infor'>{video.title}</p>
                    <p className='year'>{video.release_date}</p>
                </div>
            </div>
        </Link>
    );
}

export default MovieItemSearch;
