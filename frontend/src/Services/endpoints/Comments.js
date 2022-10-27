import axios from "../axios/axios";


const endpoints = {
    createComment: (comment) => axios.post("news/comments/create/", comment),
    getCommentsByNewsId: (id, page) => axios.get(`news/${id}/comments/?page=${page}`),
    getListCommentsByLimit: (limit) => axios.get(`news/comments/?limit=${limit}`)
};

export default endpoints;