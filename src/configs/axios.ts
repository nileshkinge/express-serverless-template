import axios from 'axios';

const axiosConfig = {
    headers: {
        'X-Requested-With': 'XMLRequest',
        Accept: 'application/json, text/plain, */*',
        'Cache-Control': 'no-cache', 
    }
}

export const axiosInstance = axios.create({
    headers: axiosConfig.headers,
});