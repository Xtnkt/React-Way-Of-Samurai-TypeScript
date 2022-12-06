import {v1} from "uuid";

export type UsersPageAT = FollowAT | UnFollowAT | SetUsersAT

type FollowAT = ReturnType<typeof FollowAC>
type UnFollowAT = ReturnType<typeof UnFollowAC>
type SetUsersAT = ReturnType<typeof SetUsersAC>
export type UsersPageType = {
    users: UsersDataType[]
}
export type UsersDataType = {
    id: string,
    fullName: string,
    photoUrl:string,
    status: string,
    followed: boolean,
    location: {
        city: string,
        country: string
    }
}
export const FollowAC = (userId: string) => {
    return {
        type: 'FOLLOW',
        userId: userId,
    } as const
}
export const UnFollowAC = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        userId: userId,
    } as const
}
export const SetUsersAC = (users: any) => {
    return {
        type: 'SET-USERS',
        users: users,
    } as const
}

let initialState: UsersPageType = {
    users: [
        {
            id: v1(), photoUrl:'https://proprikol.ru/wp-content/uploads/2020/12/kartinki-rybki-dlya-detej-43-650x650.jpg',
            fullName: 'Vlad', status: 'I am first here', followed: true,
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(), photoUrl:'https://proprikol.ru/wp-content/uploads/2020/12/kartinki-rybki-dlya-detej-43-650x650.jpg',
            fullName: 'Dima', status: 'I am second here', followed: false,
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: v1(), photoUrl:'https://proprikol.ru/wp-content/uploads/2020/12/kartinki-rybki-dlya-detej-43-650x650.jpg',
            fullName: 'Masha', status: 'I am a girl', followed: false,
            location: {city: 'Gomel', country: 'Belarus'}
        },
    ]
}
export const usersReducer = (state: UsersPageType = initialState, action: UsersPageAT): UsersPageType => {

    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(users => users.id === action.userId ? {...users, followed: true} : users)
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(users => users.id === action.userId ? {...users, followed: false} : users)
            }
        }
        case "SET-USERS":{
            return {...state,users:[...state.users, ...action.users]}
        }
        default:
            return state
    }
}