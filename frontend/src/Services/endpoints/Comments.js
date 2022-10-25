import axios from "../axios/axios";


const endpoints = {
    createComment: (comment) => axios.post("news/comments/create/", comment),
    getCommentsByNewsId: (id) => axios.get(`news/${id}/comments/`)

};

export default endpoints;