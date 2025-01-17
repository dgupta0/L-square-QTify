import axios from "axios";
const BACKEND_ENDPOINT = `https://qtify-backend-labs.crio.do/`

export const getTopAlbums = async() => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}albums/top`);
        const data = res.data;
        return data
    } catch (error) {
        console.log(error)
    }
    return
}
export const getNewAlbums = async() => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}albums/new`);
        const data = res.data;
        return data
    } catch (error) {
        console.log(error)
    }
    return
}
export const getSongs = async() => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}songs`);
        const data = res.data;
        return data
    } catch (error) {
        console.log(error)
    }
    return
}

export const getGenres = async() => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}genres`);
        const data = res.data;
        // console.log("dataFromAPI", data)
        return data
    } catch (error) {
        console.log(error)
    }
    return
}