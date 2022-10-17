let reRenderTree = () => {

}
export const subscribe = (observe: () => void) => {
    reRenderTree = observe
}

export type PostDataType = {
    id: number,
    message: string,
    likesCount: number,
}

type DialogsDataType = {
    id: number,
    name: string,
}

type MessageDataType = {
    id: number,
    message: string,
}

export type ProfilePageType = {
    postsData: PostDataType[],
    newPostText: string,
}

export type DialogsPageType = {
    messagesData: MessageDataType[],
    dialogsData: DialogsDataType[],
    newMessageText: string,
}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,

}

export let state: RootStateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hello', likesCount: 4},
            {id: 2, message: 'It-kamasutra', likesCount: 8},
        ],
        newPostText: ''
    },
    dialogsPage: {
        messagesData: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are y?'},
            {id: 3, message: 'It-kamasutra'},
        ],
        dialogsData: [
            {id: 1, name: 'Vlad'},
            {id: 2, name: 'Roma'},
            {id: 3, name: 'Dima'},
            {id: 4, name: 'Masha'},
        ],
        newMessageText: ''
    }
}

export const addPost = () => {
    const newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    reRenderTree()
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    reRenderTree()
}

export const addMessage = () => {
    const newMessage = {
        id: 3,
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messagesData.push(newMessage)
    state.dialogsPage.newMessageText = ''
    reRenderTree()
}

export const updateNewMessageText = (newMessage: string) => {
    state.dialogsPage.newMessageText = newMessage
    reRenderTree()
}