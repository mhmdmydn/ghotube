import React, { Fragment } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ChannelCard({data}) {

    return (
        <Fragment>
            {data && data.length ?
                data.map((item, index) => {
                
                return <Link to={`/ghotube/channel?channelName=${item.name}&channelId=${item.channelID}`} >
                    <div className="card-video mb-3 row-md-4">
                        <img className="channel rounded-circle m-auto" src={item.avatar} alt="..." style={{width : '130px', height: '130px', marginLeft: '8px', marginRight : '8px'}} />
                       
                        <div className="card-body">
                            <div className="d-flex align-items-start">
                                <h5>{item.name}</h5>
                                {(item.verified) ? <FaCheckCircle className="mx-2 mt-1" /> : ''}
                            </div>
                            <div>
                                <p>{item.subscribers}</p>
                            </div>

                            <div>
                                <p className="text-sm-left">{item.description}</p>
                            </div>
                        </div>

                        <div className="m-auto p-5">
                            <Link className="btn btn-primary" to={`/ghotube/channel?channelName=${item.name}&channelId=${item.channelID}`} >Views</Link>
                        </div>
                    </div>
                    <hr />
                </Link>
                }) : null}
        </Fragment>
    );
}

export default ChannelCard;