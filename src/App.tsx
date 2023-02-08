import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Friends} from "./Components/Friends/Friends";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./Components/Navbar/NavBarContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";


export const App = () => {
    return (
        <div className='app_wrapper'>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className='app_wrapper_content'>
                <Route path="/profile/:userId?" render={() =>
                    <ProfileContainer/>
                }/>
                <Route path="/dialogs" render={() =>
                    <DialogsContainer/>
                }/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/users" render={() =>
                    <UsersContainer/>
                }/>
                <Route path="/friends" render={() => <Friends/>}/>
                <Route path="/login" render={() => <Login/>}/>
            </div>
        </div>
    )
}

