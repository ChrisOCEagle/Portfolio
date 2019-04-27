import axios from 'axios';

export default {
    email: function(data) {
        return axios.post("/api/email", data);
    },
};