export type GetUsersType={
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
    userId: number | string,
    photos: avatarPhotos
}
export type avatarPhotos ={
        small: null | string,
        large: null | string
}
export type ResponseType<T={}>={
    resultCode: number
    fieldsErrors: string[]
    messages: string[]
    data: T
}
export type AuthDataType={
    id:string | null
    email:string | null
    login:string | null
}
export type LoginDataType = FormikErrorType & {
    captcha?: boolean
}
export type FormikErrorType ={
    email: string
    password: string
    rememberMe: boolean
}
