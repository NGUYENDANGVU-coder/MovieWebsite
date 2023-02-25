import React, { useEffect, useState } from 'react';
import tmdbApi from '../../api/tmdbApi';

const VideoDetail = ({category,id}) => {
    const [video,setVideo]=useState([]);
    useEffect(() => {
        const getVideoList=async()=>{
            const res=await tmdbApi.getVideos(category,id);
            setVideo(res.data.results.slice(0,4))
        }

        getVideoList()        
    }, [category,id]);
    window.addEventListener('resize', function() {
        var videoContainer = document.querySelector('.video');
        var videoWidth = videoContainer.offsetWidth;
        var videoHeight = videoWidth * 0.4285; /* 21:9 aspect ratio */
        videoContainer.style.height = videoHeight + 'px';
    });
    
    return (
        <div >
            {
                video.map((item,index)=>{
                    return(
                        <div key={index} className="video">
                            <h4 className="video__title">{item.name}</h4>
                            <iframe src={`https://www.youtube.com/embed/${item.key}`} width='100%'  title='video' className='video__src'></iframe>
                            
                        </div>
                    )
                })
            }
        </div>
    );
}

export default VideoDetail;
