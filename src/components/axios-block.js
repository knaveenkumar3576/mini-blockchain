import axios from 'axios';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const URL = 'https://blockchain.info/';

const axiosHandler = axios.create({
    baseURL: PROXY_URL+URL,
})

export default axiosHandler