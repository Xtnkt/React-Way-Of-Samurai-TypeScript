import {v1} from "uuid";
import {ActionsTypes} from "./store";

export type DialogsPageActionType = AddMessageAT | UpdateNewMessageTextAT
type AddMessageAT = {
    type: 'ADD-MESSAGE',
}
type UpdateNewMessageTextAT = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessage: string,
}
type DialogsPageType = {
    messagesData: MessageDataType[],
    dialogsData: DialogsDataType[],
    newMessageText: string,
}
type MessageDataType = {
    id: string,
    message: string,
}
type DialogsDataType = {
    id: string,
    name: string,
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

let initialState:DialogsPageType = {
    messagesData: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'How are y?'},
        {id: v1(), message: 'It-kamasutra'},
    ],
    dialogsData: [
        {id: v1(), name: 'Vlad'},
        {id: v1(), name: 'Roma'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Masha'},
    ],
    newMessageText: '',
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
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