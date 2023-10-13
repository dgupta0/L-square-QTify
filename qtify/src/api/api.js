import axios from "axios";
const BACKEND_ENDPOINT = `https://qtify-backend-labs.crio.do/`

export const getTopAlbums = async() => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        const data = res.data;
        return data
    } catch (error) {
        console.log(error)
    }
    return
}