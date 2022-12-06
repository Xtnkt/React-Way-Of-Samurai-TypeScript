import {v1} from "uuid";
import {ProfilePageActionType, profileReducer} from "./profile-reducer";
import {DialogsPageActionType, dialogsReducer} from "./dialogs-reducer";
import {friendsNavbarReducer} from "./friendsNavbar-reducer";

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

export type FriendsPageType = {
    friendsData: FriendsDataType[]
}

export type FriendsDataType = {
    id: string,
    img: string,
    name: string
}
export type ActionsTypes = ProfilePageActionType | DialogsPageActionType

// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: v1(), message: 'Hello', likesCount: 4},
//                 {id: v1(), message: 'It-kamasutra', likesCount: 8},
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             messagesData: [
//                 {id: v1(), message: 'Hello'},
//                 {id: v1(), message: 'How are y?'},
//                 {id: v1(), message: 'It-kamasutra'},
//             ],
//             dialogsData: [
//                 {id: v1(), name: 'Vlad'},
//                 {id: v1(), name: 'Roma'},
//                 {id: v1(), name: 'Dima'},
//                 {id: v1(), name: 'Masha'},
//             ],
//             newMessageText: '',
//         },
//         friendsPage: {
//             friendsData: [
//                 {
//                     id: v1(),
//                     img: "https://img1.liveinternet.ru/images/attach/c/8/102/784/102784519__obitatli_morea.png",
//                     name: "Sasha"
//                 },
//                 {
//                     id: v1(),
//                     img: "https://www.pngall.com/wp-content/uploads/5/Piranha-Fish-PNG-Picture.png",
//                     name: "Vlad"
//                 },
//                 {
//                     id: v1(),
//                     img: "https://i.pinimg.com/originals/da/69/6b/da696b031eee3d2822e94b44180ef52a.png",
//                     name: "Dimon"
//                 },
//             ]
//         },
//     },
//     getState() {
//         return this._state
//     },
//     _callSubscriber() {
//     },
//     subscribe(observe) {
//         this._callSubscriber = observe
//     },
//     // dispatch(action) {
//     //     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     //     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//     //     this._state.friendsPage = friendsNavbarReducer(this._state.friendsPage, action)
//     //     this._callSubscriber()
//     // }
// }
