import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {TypedDispatch} from "./redux-store";

type SetUserDataAT = {
    type: 'SET-USER-DATA',
    payload: {
        id: number | null,
        email: string | null,
        login: string | null
        isAuth: boolean
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
                ...action.payload,
            }
        }
        default:
            return state
    }
}

export const SetAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataAT => {
    return {
        type: 'SET-USER-DATA',
        payload: {id, email, login, isAuth}
    }
}

export const getAuthTC = () => (dispatch: Dispatch) => {
    authAPI.getAuth()
        .then((data) => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                dispatch(SetAuthUserDataAC(id, email, login, true))
            }
        })
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: TypedDispatch<SetUserDataAT>) => {

    authAPI.login(email, password, rememberMe)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(getAuthTC())
            }
        })
}
export const logoutTC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then((data) => {
            if (data.resultCode === 1) {
                dispatch(SetAuthUserDataAC(null, null, null, false))
            }
        })
}