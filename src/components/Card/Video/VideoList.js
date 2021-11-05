import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { formatViews } from '../../../utils/Util';
import './style.css';

function VideoList({data}) {

    return (
        <Fragment>
            {data && data.length ?
                data.map((item, index) => {
                
                return <Link to={`/ghotube/watch/${item.videoID}`} >
                    <div className="card-video mb-3">
                        <img src={item.bestThumbnail} alt="..." />
                        <div className="card-body">
                            <h5>{item.title}</h5>
                            <p>{formatViews(item.views)}</p>
                        </div>
                    </div>
                </Link>
            }): null}
        </Fragment>
    );
}

export default VideoList;