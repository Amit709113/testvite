import axios from "axios";
import { getToken } from "../auth";
export const BASE_URL='http://localhost:9090'
export const REG_URL='/api/v1/auth/register'
export const LOGIN_URL='/api/v1/auth/login'
export const NOTICE_URL='/api/notices/'
export const CAROUSEL_URL='api/carousel/'
export const TOPPER_URL='api/topper/'
export const USER_URL="api/user/"
//2 more for gallery and category

export const myAxios=axios.create({
    baseURL:BASE_URL,
})

export const myAxiosToken=axios.create({
    baseURL:BASE_URL,
    headers:{
        Authorization:`Bearer ${getToken()}`,
        "Content-type": "application/json; charset=UTF-8"
        //may be we have to add more
    }
})
