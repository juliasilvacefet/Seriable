import axios from "axios";
import { apiResolver } from "next/dist/next-server/server/api-utils";

const api = axios.create({
    baseURL:"http://apiseriable.herokuapp.com",

});

export default api;