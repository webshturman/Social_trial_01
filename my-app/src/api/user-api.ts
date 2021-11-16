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
        large: null
    }
    status: null
    followed: boolean
}
//
// export type ProfileType={
//     aboutMe: "я круто чувак 1001%",
//     contacts: {
//         facebook: "facebook.com",
//         website: null,
//         vk: "vk.com/dimych",
//         twitter: "https://twitter.com/@sdf",
//         instagram: "instagra.com/sds",
//         youtube: null,
//         github: "github.com",
//         mainLink: null
//     },
//     lookingForAJob: true,
//     lookingForAJobDescription: "не ищу, а дурачусь",
//     fullName: "samurai dimych",
//     userId: 2,
//     photos: {
//         small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
//         large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
//     }
// }