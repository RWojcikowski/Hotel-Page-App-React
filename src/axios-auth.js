import axios from "axios";

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
    params: {
        key: 'AIzaSyAWotdJSYsGbVUisJakVVmO_dK4NnrX9Uk'
    }
});

export default instance;