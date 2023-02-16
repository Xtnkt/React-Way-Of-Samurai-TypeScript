import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { profileReducer} from "./profile-reducer";
import { dialogsReducer} from "./dialogs-reducer";
import { friendsNavbarReducer} from "./friendsNavbar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk  from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsNavbar: friendsNavbarReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppStateType = ReturnType<typeof rootReducer>
//
// window.store = store