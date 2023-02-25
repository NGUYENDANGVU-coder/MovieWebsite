import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderCatalog from '../components/header_catalog/HeaderCatalog';
import VideoSeries from '../components/video_series/VideoSeries';


const Catalog = () => {
    const {category}=useParams();
    return (
        <div>
            <HeaderCatalog category={category}/>
            <div className="container">
                <div className="section mb-3">
                    <VideoSeries category={category}/>
                </div>
            </div>
        </div>
    );
}

export default Catalog;
