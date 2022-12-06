import {v1} from "uuid";

export type FriendsNavbarType = {
    friendsData: FriendsDataType[]
}

export type FriendsDataType = {
    id: string,
    img: string,
    name: string
}
export type FriendsNavbarAT = {
    type : any
}

let initialState:FriendsNavbarType =  {
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
    }

export const friendsNavbarReducer = (state:FriendsNavbarType = initialState, action:FriendsNavbarAT):FriendsNavbarType => {
    return state
}