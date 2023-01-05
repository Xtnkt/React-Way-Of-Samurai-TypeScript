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
    isAuth:boolean
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
                isAuth:true
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