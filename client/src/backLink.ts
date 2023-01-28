import axios from 'axios';

export default axios.create({
    baseURL: "tucoenerie-nginx-1:5001/bats"
});
