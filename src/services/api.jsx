// bitly key: ef8412ca437f9f9a5d69f8f45a482109964e987f

import axios from "axios";

export const key = "ef8412ca437f9f9a5d69f8f45a482109964e987f";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    "Authorization": `Bearer ${key}`
  }
}) 

export default api;