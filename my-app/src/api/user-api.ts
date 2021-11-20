import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {
        'API-KEY': 'b8b0c036-4edd-4913-8c7f-79ccaeace603'
    },
})

export const UsersAPI = {
    getUsers(page:number, count:number){
       return instance.get<GetUsersType>(`users?page=${page}&count=${count}`)
    },
    getProfile(userId:string){
        return instance.get<ProfileType>(`profile/${userId}`)
        // return instance.get<ProfileType>(`profile/22`)
    }
}

type GetUsersType={
    items:UserType[]
    totalCount:number
    error: string
}
export type UserType={
    name: string,
    id: number
    uniqueUrlName: null
    photos: {
        small: null | string
        large: null | string
    }
    status: null
    followed: boolean
}

export type ProfileType={
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string | null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string | null,
        github: string,
        mainLink: string | null,
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: null | string,
        large: null | string
    }
}