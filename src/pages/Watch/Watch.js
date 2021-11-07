import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { formatViews } from "../../utils/Util";
import { BiLike, BiDislike, BiShowAlt } from "react-icons/bi";
import VideoList from "../../components/Card/Video/VideoList";

function Watch(props) {

    const [stream, setStream] = useState([])
    const [video, setVideo] = useState([])
    const [relatedVideo, setRelatedVideo] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const id = new URLSearchParams(props.location.search).get('id');

    useEffect(() => {
        setLoading(true)
        fetchVideoStream(id)

    }, [])

    useEffect(() => {
        fetchVideo(id)
    }, [])

    const fetchVideoStream = async (id) => {
        await axios.get(`https://ghodel-api.herokuapp.com/api/v1/yt/stream/${id}`, {
            headers: {}
        }).then((response) => {
            setStream([...stream, ...response.data.format])
        }).catch((error) => setError(error))
    }
    
    const fetchVideo = async (id) => {
        await axios.get(`https://ghodel-api.herokuapp.com/api/v1/yt/show/${id}`, {
            headers: {}
        }).then((response) => {
            setVideo(response.data.watch)
            setRelatedVideo([...relatedVideo, ...response.data.watch.relatedVideo])
        }).catch((error) => setError(error))
    }

    console.log("stream format length ", (loading) ? stream.length : '');
    return (
        
        <Fragment>
            {
                (loading) ?
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mt-5 pt-4 align-items-center">
                                {
                                    (stream && stream.length) ?
                                        stream.map((item, index) => {
                                            if (index === 0) {
                                                return <video
                                                    className="shadow-sm"
                                                    id="player"
                                                    playsinline
                                                    poster={video.title}
                                                    controls
                                                    src={item.downloadURL}
                                                    style={{ width: '100%', borderRadius: '20px' }}
                                                />
                                            }
                                        })
                                        : <p>{error}</p>
                                }
                                <div className="desc mt-5">
                                    <div>
                                        <h2>{video.title}</h2>
                                        <div className="d-flex justify-content-between fs-5">
                                            <div className="d-flex">
                                                <p><BiShowAlt /> {formatViews(video.viewCount) + ` • ` + video.publishedAt}</p>
                                            </div>

                                            <div className="d-flex">
                                                <p className="mx-3">{formatViews(video.likes)} <BiLike /></p>
                                                <p className="mx-3">{formatViews(video.dislikes)} <BiDislike /></p>
                                            </div>

                                        </div>
                                        <div>
                                            <p style={{whiteSpace : 'pre-line'}}>{video.decription}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                {
                                    <VideoList data={relatedVideo} />
                                }
                            </div>
                        
                        </div>
                    </div>
                    :
                    <p style={{ textAlign: "center" }}>Loading...</p>
            }
        </Fragment>
    );
}

export default Watch;