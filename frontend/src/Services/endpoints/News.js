import axios from "../axios/axios";


const endpoints = {
    createNews: (data) => axios.post("news/create/", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    ),
    getListNews: (page) => axios.get(`news/?page=${page}`),
    getListNewsByLimit: (limit) => axios.get(`news/limit=${limit}`),
    
    getNewsById: (id) => axios.get(`news/${id}`),
};

export default endpoints;