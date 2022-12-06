import {combineReducers, createStore} from "redux";
import { profileReducer} from "./profile-reducer";
import { dialogsReducer} from "./dialogs-reducer";
import { friendsNavbarReducer} from "./friendsNavbar-reducer";
import {usersReducer} from "./users-reducer";


export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsNavbar: friendsNavbarReducer,
    usersPage: usersReducer
})

export const store = createStore(rootReducer)
