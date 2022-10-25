import axios from "../axios/axios";


const endpoints = {
    createComment: (comment) => axios.post("comments/create/", comment),
    getComments: () => axios.get("comments/")

};

export default endpoints;