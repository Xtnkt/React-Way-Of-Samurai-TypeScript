import {combineReducers, compose, createStore} from "redux";
import { profileReducer} from "./profile-reducer";
import { dialogsReducer} from "./dialogs-reducer";
import { friendsNavbarReducer} from "./friendsNavbar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsNavbar: friendsNavbarReducer,
    usersPage: usersReducer,
    auth:authReducer
})

export const store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>
//
// window.store = store