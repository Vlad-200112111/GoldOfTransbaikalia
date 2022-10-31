import axios from "../axios/axios";


const endpoints = {
    getListLicenses: (page) => axios.get(`licenses/?page=${page}`)
};

export default endpoints;