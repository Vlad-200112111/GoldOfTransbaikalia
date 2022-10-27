import axios from "../axios/axios";

const endpoints = {
  createNews: (data) =>
    axios.post("news/create/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  getListNewsByLimit: (limit) => axios.get(`news/limit/?limit=${limit}`),
  getNews: (options) =>
    axios.get(
      `news/?title=${options.title || ""}&caption=${
        options?.caption || ""
      }&creation_date=${options?.creation_date || ""}&publication=${
        options?.publication || ""
      }&page=${options?.page || 1}`
    ),
  getNewsById: (id) => axios.get(`news/${id}`),
};

export default endpoints;
