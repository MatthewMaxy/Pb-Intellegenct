import api from "./api.js";
const user = {
    login(data){
        return api.post('/user/login',data)
    },
    register(data){
        return api.post('/user/register',data)
    },
    submit(data){
        return api.post('/user/submit',data)
    },
    recoCompany(data){
        return api.post('/user/recoCompany',data)
    }

}
export default user