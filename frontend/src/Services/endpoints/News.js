import axios from "../axios/axios";


const endpoints = {
    createNews: (data) => axios.post("news/create/", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    ),
    getListNews: () => axios.get("news/")
};

export default endpoints;