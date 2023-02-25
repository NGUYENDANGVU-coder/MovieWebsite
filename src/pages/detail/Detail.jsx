import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './detail.scss'
import Cast from './Cast';
import VideoDetail from './VideoDetail';
import MovieList from '../../components/movie/MovieList';
const Detail = () => {
    const { category, id } = useParams();
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const getDetail = async () => {
            const res = await tmdbApi.detail(category, id);
            setMovie(res.data)
        }
        getDetail();

    }, [category, id]);
    return (
        <div>
            <div className="banner" style={{ backgroundImage: `url(${apiConfig.imgOriginal(movie.backdrop_path || movie.poster_path)})` }}></div>
            <div className="mb-3 movie-content container">
                <div className="movie-content__poster">
                    <div className="movie-content__poster__img" style={{ backgroundImage: `url(${apiConfig.imgOriginal(movie.poster_path || movie.backdrop_path)})` }}></div>
                </div>
                <div className="movie-content__info">
                    <h1 className="title">
                        {movie.title || movie.name}
                    </h1>
                    <div className="genres">
                        {
                            movie.genres && movie.genres.slice(0, 5).map((genre, i) => (
                                <span key={i} className="genres__item">{genre.name}</span>
                            ))
                        }
                    </div>
                    <p className="overview">{movie.overview}</p>
                    <div className="cast">
                        <div className="section__header">
                            <h2>Casts</h2>
                        </div>
                        <Cast category={category} id={id} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="section mb-3">
                    <VideoDetail category={category} id={id} />
                </div>
                <div className="section mb-3">
                    <h2 className="type__similar">Similar</h2>
                    <MovieList category={category} type='similar' id={id} />
                </div>
            </div>
        </div>

    );
}

export default Detail;
