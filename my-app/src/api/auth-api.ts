import {instance} from "./instance";
import {AuthDataType, LoginDataType, ResponseType} from "./types/userType";

export const AuthAPI = {
    authMe(){
        return instance.get<ResponseType<AuthDataType>>(`auth/me`)
    },
    authLogin(data:LoginDataType){
        return instance.post<ResponseType<{userId:number}>>('auth/login',data)
    },
    authLogout(){
        return instance.delete<ResponseType>('auth/login')
    },
}