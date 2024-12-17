import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "12f1ef1d4d12a4a07639b800658e06e3"
//https://api.themoviedb.org/3/trending/all/day?api_key=12f1ef1d4d12a4a07639b800658e06e3
const getTrendingVideos = axios.get(movieBaseUrl + '/trending/all/day?api_key=' + api_key);

export default{
    getTrendingVideos
}