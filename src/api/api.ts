import axios from "axios";
import {UsersDataType} from "../redux/users-reducer";
import {ProfileDataType} from "../redux/profile-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '3fdc7600-2a32-4ea4-863f-5d53cc3a76c7',
    },
})

type GetUsersType = {
    items: UsersDataType[],
    totalCount: number,
    error: string
}
type FollowUserType = {
    resultCode: number,
    messages: string[],
    data: {}
}
type GetAuthDataType = {
    data: {
        id: number,
        login: string,
        email: string,
    },
    resultCode: number,
    messages: string[]
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) => res.data)
    },
    postFollow(id: number) {
        return instance.post<FollowUserType>(`follow/${id}`, {})
            .then((res) => res.data)
    },
    deleteFollow(id: number) {
        return instance.delete<FollowUserType>(`follow/${id}`)
            .then((res) => res.data)
    }
}
export const authAPI = {
    getAuth() {
        return instance.get<GetAuthDataType>('auth/me')
            .then((res) => res.data)
    }
}
export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get<ProfileDataType>(`profile/${userId}`)
            .then((res) => res.data)
    }
}