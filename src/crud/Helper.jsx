import axios from "axios";
export const BASE_URL='http://localhost:9090'
export const REG_URL='/api/v1/auth/register'
export const LOGIN_URL='/api/v1/auth/login'
export const NOTICE_URL='/api/notices/'

export const myAxios=axios.create({
    baseURL:BASE_URL,
})

export const myAxiosToken=axios.create({
    baseURL:BASE_URL,
    headers:{
        Authorization:`Bearer ${localStorage.getItem("data")}`
    }
})