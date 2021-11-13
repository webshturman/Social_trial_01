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
    }
}

type GetUsersType={
    items:Array<UserType>
    totalCount:number
    error: string
}
export type UserType={
    name: string,
    id: number
    uniqueUrlName: null
    photos: {
        small: null
        large: null
    }
    status: null
    followed: boolean
}