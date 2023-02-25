import React from 'react';
import Slider from '../components/slider/Slider';
import { Link } from 'react-router-dom';
import Button from '../components/button/Button';
import MovieList from '../components/movie/MovieList';
import { category, movieType, tvType } from '../api/tmdbApi';
const Home = () => {
    return (
        <div>
            <Slider />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <Button className="small btn">View more</Button>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Upcoming Movies</h2>
                        <Link to="/movie">
                            <Button className="small btn">View more</Button>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.upcoming} />
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to="/tv">
                            <Button className="small btn">View more</Button>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular} />
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>On The Air TV</h2>
                        <Link to="/movie">
                            <Button className="small btn">View more</Button>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated} />
                </div>
            </div>
        </div>
    );
}

export default Home;
