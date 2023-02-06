import {Dispatch} from "redux";
import {authAPI} from "../api/api";

type SetUserDataAT = {
    type: 'SET-USER-DATA',
    data: {
        id: number | null,
        email: string | null,
        login: string | null
    }
}
export type AuthType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

const initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: SetUserDataAT): AuthType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const SetAuthUserDataAC = (id: number, email: string, login: string): SetUserDataAT => {
    return {
        type: 'SET-USER-DATA',
        data: {id, email, login}
    }
}

export const getAuthTC = () => (dispatch: Dispatch) => {
    authAPI.getAuth()
        .then((data) => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                dispatch(SetAuthUserDataAC(id, email, login))
            }
        })
}