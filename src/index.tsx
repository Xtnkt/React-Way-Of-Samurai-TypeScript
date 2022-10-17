import React from 'react';
import './index.css';
import {state, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";

const reRenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
reRenderTree();

subscribe(reRenderTree)