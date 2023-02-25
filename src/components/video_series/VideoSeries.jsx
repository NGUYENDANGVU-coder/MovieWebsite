import React, { useEffect, useState } from 'react';
import './video-series.scss';
import tmdbApi from '../../api/tmdbApi';
import { movieType, tvType } from '../../api/tmdbApi';
import VideoCard from '../video-card/VideoCard';
import Button from '../button/Button';
import apiConfig from '../../api/apiConfig';
const VideoSeries = ({ category }) => {
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [movie, setMovie] = useState([]);
    let res = null;

    useEffect(() => {
        const getMovieType = async () => {
            
            switch (category) {
                case "movie":
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    res = await tmdbApi.getMovieList(movieType.upcoming);
                    break;
                case "tv":
                    res = await tmdbApi.getTvList(tvType.popular);
                    break;
                default:
                    console.error();
            }
            setMovie(res.data.results);
            setTotalPage(res.data.total_pages)
        }
        getMovieType()
    }, [category]);
    const seeMore = async () => {
        const params={
            api_key: apiConfig.apiKey,
            page:page,
        }
        switch (category) {
            case "movie":
                // eslint-disable-next-line react-hooks/exhaustive-deps
                res = await tmdbApi.getMovieSeries(movieType.upcoming,{params});
                break;
            case "tv":
                res = await tmdbApi.getTvSeries(tvType.popular,{params});
                break;
            default:
                console.error();
        }
        setMovie([...movie,...res.data.results]);
        setPage(page+1)
    }
    return (
        <>
            <div className='video-series'>
                {
                    movie.map((video, index) => {
                        return (
                            <VideoCard key={index} category={category} video={video} />
                        )
                    })
                }
            </div>
            {
                page<totalPage?(
                    <div className='btn-series'>
                        <Button className="btn small" onClick={seeMore}>See more</Button>
                    </div>
                ):(<><h3>My website will update more movie</h3></>)
            }
        </>

    );
}

export default VideoSeries;
