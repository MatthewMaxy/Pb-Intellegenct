import axios from "axios";


const api = axios.create({
    baseURL:window.ipConfigUrl.baseURL,  //通用请求地址
    timeout:10000,
})



export default api