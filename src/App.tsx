import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Friends} from "./Components/Friends/Friends";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./Components/Navbar/NavBarContainer";
import UsersContainer from "./Components/Users/UsersContainer";


export const App = () => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <NavbarContainer />
            <div className='app_wrapper_content'>
                <Route path="/profile" render={() =>
                    <Profile />
                }/>
                <Route path="/dialogs" render={() =>
                    <DialogsContainer />
                }/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/users" render={() =>
                    <UsersContainer/>
                }/>
                <Route path="/friends" render={() => <Friends/>}/>
            </div>
        </div>
    )
}

