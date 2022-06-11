import axios from 'axios-observable';
import { config } from 'process';

const axiosClient = axios.create({
    baseURL: 'https://api-domain.com/api',
    timeout: 0,
    headers: {
        'content-type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    (requestConfig) => {
        const token = 'xxx-xxx-xxx';
        requestConfig.headers = {
            Authorization: `Bearer ${token}`,
        };
        return requestConfig;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosClient.interceptors.request.use(async (response) => {
    return config;
});

export default axiosClient;
