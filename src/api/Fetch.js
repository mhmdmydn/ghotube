import axios from "axios";

export const fetchSearch = async (query) => {

    try {
        const res = await axios.get(`https://ghodel-api.herokuapp.com/api/v1/yt/search/${query}`);

        return res.data.results;
    } catch (error) {
        console.log("Search Error : ", error)
    }

}

export const fetchVideo = async () => {

    try {
        
    } catch (error) {
        console.log("Get Video Error : ",error);
        
    }

}