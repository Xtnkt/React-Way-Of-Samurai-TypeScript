import {v1} from "uuid";
import {ActionsTypes, DialogsPageType} from "./state";

export type DialogsPageActionType = AddMessageAT | UpdateNewMessageTextAT

type AddMessageAT = {
    type: 'ADD-MESSAGE',
}
type UpdateNewMessageTextAT = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessage: string,
}
export const AddMessageAC = (): AddMessageAT => {
    return {
        type: 'ADD-MESSAGE',
    }
}
export const UpdateNewMessageTextAC = (newMessage: string): UpdateNewMessageTextAT => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessage: newMessage,
    }
}

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {
                id: v1(),
                message: state.newMessageText,
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}