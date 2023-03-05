import {getAuthTC} from "./auth-reducer";
import {AppStateType, TypedDispatch} from "./redux-store";

type AppReducerActionType = {
    type: 'SET-AUTHORIZED',
}
export type AppReducerStateType = {
    authorized: boolean
}

const initialState: AppReducerStateType = {
    authorized: false,
}

export const appReducer = (state: AppReducerStateType = initialState, action: AppReducerActionType): AppReducerStateType => {
    switch (action.type) {
        case'SET-AUTHORIZED': {
            return {
                ...state,
                authorized: true
            }
        }
        default:
            return state
    }
}

export const SetAuthorizedAC = (): AppReducerActionType => ({type: 'SET-AUTHORIZED'})

export const setAuthorizedTC = () => (dispatch: TypedDispatch<AppStateType>) => {
    const promise = dispatch(getAuthTC())
    promise.then(() => {
        dispatch(SetAuthorizedAC())
    })
}