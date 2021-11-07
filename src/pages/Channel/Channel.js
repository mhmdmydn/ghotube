import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ChannelViewCard from "../../components/Card/Channel/ChannelViewCard";
import VideoGrid from "../../components/Card/Video/VideoGrid";

const Channel = (props) => {
    const [channel, setChannel] = useState([]);
    const [video, setVideo] = useState([]);
    const [count, setCount] = useState(null);
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false);

    const channelName = new URLSearchParams(props.location.search).get('channelName');
    const channelId = new URLSearchParams(props.location.search).get('channelId');
    const fetchUrl = `https://ghodel-api.herokuapp.com/api/v1/yt/search/${channelName}`;
    const videoUrl = `https://ghodel-api.herokuapp.com/api/v1/yt/channel/${channelId}?p=${page}`;


    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        fetchVideo()
    }, [])

    const fetchData = () => {
        setLoading(true);
        axios.get(fetchUrl, {
            headers: {},
        }).then((response) => {
            setChannel(response.data.results.channelList)
        }).catch((error) => {
            console.log(error);
        });
    };

    const fetchVideo = () => {
        setLoading(true);
        axios.get(videoUrl, {
            headers: {},
        }).then((response) => {
            setVideo([...video, ...response.data.playlist.video])
            setCount(response.data.playlist.count)
        }).catch((error) => {
            console.log(error);
        });

        setPage(page + 1);
    };


    
    console.log(page);
    return (
        <Fragment> {
            (!loading) ?
            <p style = {{ textAlign: "center" } }>Loading...</p> :
                <div className="container">
                <div className="row py-4">
                        <div className="col mt-5" >
                            <ChannelViewCard data={channel} id={channelId} />
                            <hr />
                        </div>
                    </div>
                    <InfiniteScroll
                        dataLength={video.length}
                        next={fetchData}
                        hasMore={true}
                        loader={<p style = {{ textAlign: "center" } }>Loading...</p>}
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }>
                        <div className="row">
                            <h5 > Videos: {count} </h5>
                            {
                                video && video.length ?
                                    video.map((item, index) => {
                                        return <VideoGrid
                                            key={index}
                                            thumbnail={item.thumbnail}
                                            title={item.title}
                                            authorName={item.author.name}
                                            id={item.id}
                                        />
                                    })
                                    : null
                            }
                        </div>
                        </InfiniteScroll>

                    </div>
        }
        </Fragment>
    );

}

export default Channel;