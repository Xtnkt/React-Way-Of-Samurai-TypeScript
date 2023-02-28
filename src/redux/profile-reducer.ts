import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type ProfilePageActionType = AddPostAT
    | SetUserProfileAT | SetUserProfileIdAT | SetStatusAT

type AddPostAT = ReturnType<typeof AddPostAC>
type SetUserProfileAT = ReturnType<typeof SetUserProfileAC>
type SetUserProfileIdAT = ReturnType<typeof SetUserProfileIdAC>
type SetStatusAT = ReturnType<typeof SetStatusAC>
export type ProfilePageType = {
    postsData: PostDataType[],
    newPostText: string,
    profile: ProfileDataType | null,
    status: string
}
export type ProfileDataType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    contacts: {
        github: string | null,
        vk: string | null,
        facebook: string | null,
        instagram: string | null,
        twitter: string | null,
        website: string | null,
        youtube: string | null,
        mainLink: string | null,
    },
    photos: {
        small: string,
        large: string
    },
    aboutMe?: string
}
export type PostDataType = {
    id: string,
    message: string,
    likesCount: number,
}


const initialState: ProfilePageType = {
    postsData: [
        {id: v1(), message: 'Hello', likesCount: 4},
        {id: v1(), message: 'It-kamasutra', likesCount: 8},
    ],
    newPostText: '',
    profile: null,
    status: ''
}
export const profileReducer = (state: ProfilePageType = initialState, action: ProfilePageActionType): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: v1(),
                message: action.newPost,
                likesCount: 0,
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            }
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export const AddPostAC = (newPost: string) => {
    return {
        type: 'ADD-POST',
        newPost
    } as const
}
export const SetUserProfileAC = (profile: ProfileDataType | null) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
export const SetUserProfileIdAC = (userId: number) => {
    return {
        type: 'SET-USER-PROFILE-ID',
        userId
    } as const
}
export const SetStatusAC = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}

export const getUserProfileTC = (id: number) => (dispatch: Dispatch) => {
    profileAPI.getUserProfile(id)
        .then((data) => dispatch(SetUserProfileAC(data)))
}
export const getStatusTC = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then((data) => dispatch(SetStatusAC(data)))
}
export const updateStatusTC = (newStatus: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(newStatus)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(SetStatusAC(newStatus))
            }
        })
}
