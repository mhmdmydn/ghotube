import React, {useState, useEffect, Fragment} from "react";
import { fetchSearch } from "../../api/Fetch";
import VideoList from "../../components/Card/Video/VideoList";
import ColoredLine from "../../components/Line/ColoredLine";

function Home(props) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const q = new URLSearchParams(props.location.search).get('q');
    
    useEffect(() => {
        const fetchSearchData = async () => {
            const res = await fetchSearch(q)
            setLoading(true)
            setData(res)
        }
        
        fetchSearchData()
        
    }, [])

    return (
        <Fragment>
            <div className="container mt-5 py-3">
                <div className="row">
                    <div className="col">
                        <h5>Search results for : {q}</h5>
                        {(!loading) ?
                            <p>Loading...</p>
                            : 
                            <VideoList data={data.videoList} />
                        }
                    </div>
                </div>
            </div>
            
        </Fragment>
     );
}

export default Home;
