import axios from 'axios';

const API_URL = 'http://localhost:8080/api/support-groups';

export const getSupportGroups = () => {
    return axios.get(API_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

export const joinSupportGroup = (groupId) => {
    return axios.post(`${API_URL}/${groupId}/join`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};
