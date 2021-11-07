import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatViews } from '../../../utils/Util';
import './../style.css';
import Aos from 'aos';
import { FaCheckCircle } from "react-icons/fa";

function VideoList({ data }) {
    

    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease', // default easing for AOS animations
        });
    }, [])
    
    return (
        <Fragment>
            {data && data.length ?
                data.map((item, index) => {
                
                return <Link to={`/ghotube/watch?id=${(item.id || item.videoID)}`} >
                    <div className="card-video mb-3 align-items-center " key={index} data-aos="fade-left">
                        <img className="m-4" src={item.bestThumbnail || item.thumbnails} alt="thumbnail" />
                        <div className="card-body ">
                            <h5>{item.title}</h5>
                            <p>{formatViews(item.views) + ` • ` + (item.uploadAt || item.publishedAt)}</p>

                            <div className="author d-flex align-items-center">
                                {
                                    (item.author.avatar !== undefined) ?
                                        <img className="rounded-circle border border-light me-3" src={item.author.avatar} alt="err"/>
                                        :
                                        null
                                }
                                
                                <Link to={`/ghotube/channel/` + (item.author.channelID || item.author.authorID)}>{item.author.name}</Link>
                                {(item.author.verified) ? <FaCheckCircle/> : ''}
                            </div>
                        </div>
                    </div>
                    </Link>
                }) : null}
            <hr />
        </Fragment>
    );
}

export default VideoList;