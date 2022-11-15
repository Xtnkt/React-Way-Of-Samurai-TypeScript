import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {ActionsTypes, StoreType} from "./redux/store";
import {Friends} from "./Components/Friends/Friends";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";


type AppPropsType = {
    store: StoreType,
    dispatch: (action: ActionsTypes) => void
}

export const App = () => {
    return (
        <div className='app_wrapper'>
            <Header/>
            {/*<Navbar store={props.store}/>*/}
            <Navbar />
            <div className='app_wrapper_content'>
                <Route path="/profile" render={() =>
                    <Profile />
                }/>
                {/*<Route path="/dialogs" render={() =>*/}
                {/*    <DialogsContainer  store={props.store}/>*/}
                {/*}/>*/}
                <Route path="/dialogs" render={() =>
                    <DialogsContainer />
                }/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/friends" render={() => <Friends/>}/>
            </div>
        </div>
    )
}

