import axios from "../axios/axios";

const endpoints = {
  createNews: (data) =>
    axios.post("news/create/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  getListNews: (page) => axios.get(`news/?page=${page}`),
  getListNewsByLimit: (limit) => axios.get(`news/limit=${limit}`),
  getNewsByFilter: (
    title = "",
    caption = "",
    creation_date = "",
    publication = ""
  ) =>
    axios.get(
      `news/filter/?title=${title}&caption=${caption}&creation_date=${creation_date}&publication=${publication}`
    ),
  getNewsById: (id) => axios.get(`news/${id}`),
};

export default endpoints;
