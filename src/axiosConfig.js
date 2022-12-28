import Axios from 'axios';

const axiosInstance = Axios.create({
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
axiosInstance.interceptors.response.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

export default axiosInstance;