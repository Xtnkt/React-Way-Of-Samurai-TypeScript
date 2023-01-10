import {v1} from "uuid";

export type ProfilePageActionType = AddPostAT | UpdateNewPostTextAT | SetUserProfileAT | SetUserProfileIdAT

type AddPostAT = ReturnType<typeof AddPostAC>
type UpdateNewPostTextAT = ReturnType<typeof UpdateNewPostTextAC>
type SetUserProfileAT = ReturnType<typeof SetUserProfileAC>
type SetUserProfileIdAT = ReturnType<typeof SetUserProfileIdAC>
export type ProfilePageType = {
    postsData: PostDataType[],
    newPostText: string,
    profile: ProfileDataType | null
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

export const AddPostAC = () => {
    return {
        type: 'ADD-POST',
    } as const
}

export const UpdateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText,
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

let initialState: ProfilePageType = {
    postsData: [
        {id: v1(), message: 'Hello', likesCount: 4},
        {id: v1(), message: 'It-kamasutra', likesCount: 8},
    ],
    newPostText: '',
    profile: null
}
export const profileReducer = (state: ProfilePageType = initialState, action: ProfilePageActionType): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ""
            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newText}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}