import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {RootStateType} from "./redux/state";
import {Friends} from "./Components/Friends/Friends";


type AppPropsType = {
    state: RootStateType,
    addPost: () => void,
    updateNewPostText: (newText: string) => void,
    updateNewMessageText: (newMessage: string) => void,
    addMessage: () => void
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar friendsData={props.state.friendsPage.friendsData}/>
            <div className='app_wrapper_content'>
                <Route path="/profile" render={() =>
                    <Profile profilePage={props.state.profilePage}
                             addPost={props.addPost}
                             updateNewPostText={props.updateNewPostText}
                    />
                }/>
                <Route path="/dialogs" render={() =>
                    <Dialogs dialogsPage={props.state.dialogsPage}
                             updateNewMessageText={props.updateNewMessageText}
                             addMessage={props.addMessage}
                    />
                }/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/friends" render={() => <Friends/>}/>
            </div>
        </div>
    )
}

