import axios from 'axios';

// https://free.currconv.com/api/v7
// convert?q=USD_PHP&compact=ultra&apiKey=e9e7331320075f7f1caa

const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7'
})

export default api;