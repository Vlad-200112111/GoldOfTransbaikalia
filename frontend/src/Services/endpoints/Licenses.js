import axios from "../axios/axios";


const endpoints = {
    getListLicenses: (name,page) => axios.get(`licenses/?name=${name}&page=${page}`),
    getLicenseById: (id) => axios.get(`licenses/${id}`)
};

export default endpoints;