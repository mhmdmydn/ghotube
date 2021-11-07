import { Fragment } from "react";
import { Link } from "react-router-dom";

const VideoGrid = ({ thumbnail, title, authorName, id}) => {
    return (
        <Fragment>
                <div className="col mb-3 justify-content-center" >
                    <Link to={`/ghotube/watch?id=${id}`}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={thumbnail} className="card-img-top" alt="err" />
                            <div className="card-body">
                                <h5 className="card-title"> {title} </h5>
                                <p className="card-text">{authorName}</p>
                            </div>
                        </div>
                    </Link>
                </div>
        </Fragment>
    );
}

export default VideoGrid;