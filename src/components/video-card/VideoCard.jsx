import React from 'react';
import './video-card.scss'
import apiConfig from '../../api/apiConfig';
import { Link } from 'react-router-dom';

import Button from '../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const VideoCard = ({ video, category }) => {
    const link = '/' + category + '/' + video.id;
    const bg = apiConfig.imgW500(video.poster_path || video.backdrop_path);
    return (
        <Link to={link}>
            <div className="movie-card" >
                <img src={bg} alt="video-type" />
                <div className='movie-card__item'>
                    <Button className="btn small-second movie-card__item__btn">
                        <FontAwesomeIcon icon={faPlay} />
                    </Button>
                </div>
            </div>
            <h3>{video.title || video.name}</h3>
        </Link>
    );
}

export default VideoCard;
