import {v1} from "uuid";

export type DialogsPageActionType = AddMessageAT

type AddMessageAT = {
    type: 'ADD-MESSAGE',
    newMessageText: string
}
export type DialogsPageType = {
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

export const AddMessageAC = (newMessageText: string): AddMessageAT => {
    return {
        type: 'ADD-MESSAGE',
        newMessageText
    }
}

const initialState: DialogsPageType = {
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsPageActionType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage = {
                id: v1(),
                message: action.newMessageText,
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            }
        }
        default:
            return state
    }
}
