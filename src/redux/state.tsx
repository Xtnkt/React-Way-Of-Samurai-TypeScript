import {v1} from "uuid";

export type StoreType = {
    _state: RootStateType,
    _callSubscriber: () => void,
    subscribe: (observe: () => void) => void,
    getState: () => RootStateType,
    dispatch: (action: ActionsTypes) => void
}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    friendsPage: FriendsPageType
}

export type ProfilePageType = {
    postsData: PostDataType[],
    newPostText: string,
}

export type PostDataType = {
    id: string,
    message: string,
    likesCount: number,
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

type FriendsPageType = {
    friendsData: FriendsDataType[]
}

export type FriendsDataType = {
    id: string,
    img: string,
    name: string
}
export type ActionsTypes =
    ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator > |
    ReturnType<typeof addMessageActionCreator> | ReturnType<typeof updateNewMessageTextActionCreator>

export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: v1(), message: 'Hello', likesCount: 4},
                {id: v1(), message: 'It-kamasutra', likesCount: 8},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        friendsPage: {
            friendsData: [
                {
                    id: v1(),
                    img: "https://img1.liveinternet.ru/images/attach/c/8/102/784/102784519__obitatli_morea.png",
                    name: "Sasha"
                },
                {
                    id: v1(),
                    img: "https://www.pngall.com/wp-content/uploads/5/Piranha-Fish-PNG-Picture.png",
                    name: "Vlad"
                },
                {
                    id: v1(),
                    img: "https://i.pinimg.com/originals/da/69/6b/da696b031eee3d2822e94b44180ef52a.png",
                    name: "Dimon"
                },
            ]
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
    },
    subscribe(observe) {
        this._callSubscriber = observe
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage = {
                id: v1(),
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messagesData.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage
            this._callSubscriber()
        }
    }
}
export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST',
    } as const
}

export const updateNewPostTextActionCreator = (newText:string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText,
    } as const
}

export const addMessageActionCreator = () => {
    return {
        type: 'ADD-MESSAGE',
       } as const
}
export const updateNewMessageTextActionCreator = (newMessage:string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessage: newMessage,
    } as const
}