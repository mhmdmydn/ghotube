import { Fragment } from "react";
import { FaCheckCircle } from "react-icons/fa";

const ChannelViewCard = ({data, id}) => {
    return (
        
        <Fragment>
            {data && data.length ?
                data.map((item, index) => {
                    if (item.channelID === id) {
                        return <div className="card-video mb-3" key={index} >
                            <img className="rounded-circle " src={item.avatar} alt="..." style={{width : '130px', height: '130px', marginLeft: '8px', marginRight : '8px'}} />
                        
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
                        </div>
                    }

                }) : null}
        </Fragment>
     );
}
 
export default ChannelViewCard;