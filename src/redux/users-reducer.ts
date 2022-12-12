import {v1} from "uuid";

export type UsersPageAT = FollowAT | UnFollowAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT

type FollowAT = ReturnType<typeof FollowAC>
type UnFollowAT = ReturnType<typeof UnFollowAC>
type SetUsersAT = ReturnType<typeof SetUsersAC>
type SetCurrentPageAT = ReturnType<typeof SetCurrentPageAC>
type SetTotalUsersCountAT = ReturnType<typeof SetTotalUsersCountAC>

export type UsersPageType = {
    users: UsersDataType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
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
        userId,
    } as const
}
export const UnFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId,
    } as const
}
export const SetUsersAC = (users: UsersDataType[]) => {
    return {
        type: 'SET-USERS',
        users,
    } as const
}
export const SetCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage,
    } as const
}
export const SetTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount,
    } as const
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1
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
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        default:
            return state
    }
}