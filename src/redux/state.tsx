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
}

export type DialogsPageType = {
    messagesData: MessageDataType[],
    dialogsData: DialogsDataType[],
}

export type RootStateType = {
    profilePage:ProfilePageType,
    dialogsPage:DialogsPageType,

}

export let state: RootStateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hello', likesCount: 4},
            {id: 2, message: 'It-kamasutra', likesCount: 8},
        ],
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
        ]
    }
}
