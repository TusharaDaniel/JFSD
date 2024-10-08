import axios from 'axios';

const API_URL = 'http://localhost:8080/api/resources';

export const getResources = () => {
    return axios.get(API_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

export const addResource = (resource) => {
    return axios.post(API_URL, resource, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};
