import React, { useEffect, useRef, useState } from 'react';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import Button from '../button/Button';
import Modal, { ModalContent } from '../modal/Modal';
const Slider = () => {
    const [movieItems, setMovieItems] = useState([]);
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    useEffect(() => {
        const getMovies = async () => {
            try {
                const res = await tmdbApi.getMovieList(movieType.popular);
                setMovieItems(res.data.results.slice(4, 10))
            } catch (error) {
                console.log(error);
            }

        }
        getMovies()
    }, []);

    return (
        <div className='slider'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {movieItems.map((item, index) => {
                    const setModalActive = async () => {
                        const modal = document.querySelector(`#modal_${item.id}`);

                        const videos = await tmdbApi.getVideos(category.movie, item.id);
                        if (videos.data.results.length > 0) {
                            const videSrc = 'https://www.youtube.com/embed/' + videos.data.results[0].key;
                            modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);
                        } else {
                            modal.querySelector('.modal__content').innerHTML = 'No trailer';
                        }

                        modal.classList.add('active');
                    }
                    return (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <div className={`${isActive ? 'active' : ''}`}>
                                    <div className='slider__item'>
                                        <img src={apiConfig.imgOriginal(item.backdrop_path)} alt='slider'></img>
                                        <div className='slider__item__content'>
                                            <div className="slider__item__content__infor">
                                                <h2 className='title'>{item.title}</h2>
                                                <div className="overview">{item.overview}</div>
                                                <div className="btns">
                                                    <Button to={`/movie/${item.id}`} className="primary btn">
                                                        Watch Now
                                                    </Button>
                                                    <Button onClick={setModalActive} className="btn outline" >
                                                        Watch Trailer
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="slider__item__content__poster">
                                                <img src={apiConfig.imgW500(item.poster_path)} alt='poster'></img>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}

                        </SwiperSlide>
                    )
                })}
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
            {
                movieItems.map((item, i) => <TrailerModal key={i} item={item} />)
            }
        </div>
    );
}
const TrailerModal = props => {
    const item = props.item;

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
            </ModalContent>
        </Modal>
    )
}
export default Slider;
