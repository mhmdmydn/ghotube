import axios from "axios";
import React, {useState, useEffect, Fragment} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ChannelCard from "../../components/Card/Channel/ChannelCard";
import VideoList from "../../components/Card/Video/VideoList";

function Home(props) {

    const [video, setVideo] = useState([]);
    const [channel, setChannel] = useState([]);
    const [shelf, setShelf] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)
    const query = new URLSearchParams(props.location.search).get('q');
    
    const fetchUrl = `https://ghodel-api.herokuapp.com/api/v1/yt/search/${query}?p=${page}`;
    
    useEffect(() => {

        fetchData()

    }, [query])
    
    const fetchData = () => {

        setLoading(true);

        axios.get(fetchUrl, {
            headers: {},
        }).then((response) => {
            setVideo([...video, ...response.data.results.videoList]);
            setChannel(response.data.results.channelList)
            setShelf(response.data.results.shelf)
        }).catch((error) => {
            console.log(error);
        });
        setPage(page + 1);
    };
    
    return (
        <Fragment>
            {(!loading) ?
                <p>Loading...</p>
                :
                <div className="container mt-5 py-3">
                    <div className="row">
                        <div className="col-md-12">
                            <h5>Search results for : {query}</h5>
                            <ChannelCard data={channel} />

                            <InfiniteScroll
                                
                                dataLength={video.length}
                                next={fetchData}
                                hasMore={true}
                                loader={<p>Loading...</p>}
                                endMessage={
                                    <p style={{ textAlign: "center" }}>
                                        <b>Yay! You have seen it all</b>
                                    </p>
                                }>
                                <VideoList data={video} />
                                
                            </InfiniteScroll>
                        
                    </div>
                </div>
            </div>
            }
        </Fragment>
     );
}

export default Home;
