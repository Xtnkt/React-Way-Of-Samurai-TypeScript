import {v1} from "uuid";
import {ActionsTypes} from "./store";

export type ProfilePageActionType = AddPostAT | UpdateNewPostTextAT

type AddPostAT = ReturnType<typeof AddPostAC >
type UpdateNewPostTextAT = ReturnType<typeof UpdateNewPostTextAC >
export type ProfilePageType = {
    postsData: PostDataType[],
    newPostText: string,
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
    }as const
}

let initialState:ProfilePageType = {
        postsData: [
            {id: v1(), message: 'Hello', likesCount: 4},
            {id: v1(), message: 'It-kamasutra', likesCount: 8},
        ],
        newPostText: ''
    }
export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST':{
            const newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                postsData:[...state.postsData, newPost],
                newPostText: ""
            }
        }
        case 'UPDATE-NEW-POST-TEXT':{
            return {...state, newPostText: action.newText}
        }

        default:
            return state
    }
}