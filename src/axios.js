import axios from "axios";

const instance = axios.create({
    baseURL: 'https://hotel-page-app-default-rtdb.europe-west1.firebasedatabase.app'
});

export default instance;