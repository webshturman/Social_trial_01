import { instance } from "./instance"
import {GetUsersType, ProfileType, UserType, ResponseType} from "./types/userType";

export const UsersAPI = {
    getUsers(page:number, count:number){
       return instance.get<GetUsersType>(`users?page=${page}&count=${count}`)
    },
    getProfile(userId:string){
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    setFollowStatus(userId:number){
        return instance.post<ResponseType<UserType>>(`follow/${userId}`)
    },
    deleteFollowStatus(userId:number){
        return instance.delete<ResponseType<UserType>>(`follow/${userId}`)
    },
    getUserStatus(userId:string){
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status:string){
        return instance.put<ResponseType>('profile/status', {status})
    },
}

// type GetUsersType={
//     items:UserType[]
//     totalCount:number
//     error: string
// }
// export type UserType={
//     name: string,
//     id: number
//     uniqueUrlName: null
//     photos: {
//         small: null | string
//         large: null | string
//     }
//     status: null
//     followed: boolean
// }
//
// export type ProfileType={
//     aboutMe: string,
//     contacts: {
//         facebook: string,
//         website: string | null,
//         vk: string,
//         twitter: string,
//         instagram: string,
//         youtube: string | null,
//         github: string,
//         mainLink: string | null,
//     },
//     lookingForAJob: boolean,
//     lookingForAJobDescription: string,
//     fullName: string,
//     userId: number,
//     photos: {
//         small: null | string,
//         large: null | string
//     }
// }
//
// export type ResponseType<T={}>={
//     resultCode: number
//     fieldsErrors: string[]
//     messages: string[]
//     data: T
// }
// export type AuthDataType={
//     id:string | null
//     email:string | null
//     login:string | null
// }
// export type LoginDataType = FormikErrorType & {
//     captcha?: boolean
// }
// export type FormikErrorType ={
//     email: string
//     password: string
//     rememberMe: boolean
// }