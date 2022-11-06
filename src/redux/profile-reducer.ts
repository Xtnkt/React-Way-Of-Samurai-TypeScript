import {v1} from "uuid";
import {ActionsTypes, ProfilePageType} from "./state";

export type ProfilePageActionType = AddPostAT | UpdateNewPostTextAT

type AddPostAT = {
    type: 'ADD-POST'
}

type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string,
}

export const AddPostAC = (): AddPostAT => {
    return {
        type: 'ADD-POST',
    }
}

export const UpdateNewPostTextAC = (newText: string): UpdateNewPostTextAT => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText,
    }
}

export const profileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0,
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}