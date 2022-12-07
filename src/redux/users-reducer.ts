import {v1} from "uuid";

export type UsersPageAT = FollowAT | UnFollowAT | SetUsersAT

type FollowAT = ReturnType<typeof FollowAC>
type UnFollowAT = ReturnType<typeof UnFollowAC>
type SetUsersAT = ReturnType<typeof SetUsersAC>
export type UsersPageType = {
    users: UsersDataType[]
}
export type UsersDataType = {
    "name": string,
    "id": number,
    "uniqueUrlName": string,
    "photos": {
        "small": string,
        "large": string
    },
    "status": string,
    "followed": boolean
     }

export const FollowAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId: userId,
    } as const
}
export const UnFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId,
    } as const
}
export const SetUsersAC = (users: UsersDataType[]) => {
    return {
        type: 'SET-USERS',
        users: users,
    } as const
}

let initialState: UsersPageType = {
    users: []

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