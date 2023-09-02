import axios from "axios";

export const BASE_URL="http://127.0.0.1:9090/api";

export const myAxios=axios.create({
    baseURL:BASE_URL,
})