import { instance } from "./instance"
import {GetUsersType, ProfileType, UserType, ResponseType, avatarPhotos} from "./types/userType";

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
    loadUserPhoto(photo:any){
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put<ResponseType<{photos:avatarPhotos}>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
}
