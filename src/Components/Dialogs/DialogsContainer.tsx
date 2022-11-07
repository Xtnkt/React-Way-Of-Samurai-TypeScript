import React from 'react';
import { StoreType,} from "../../redux/store";
import {AddMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
 
type DialogsContainerPropsType = {
    store: StoreType,
}

export const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

    const state = props.store.getState().dialogsPage

    const addMessage = () => {
        props.store.dispatch(AddMessageAC())
    }
    const updateNewMessageText = (newMessage:string) => {
        props.store.dispatch(UpdateNewMessageTextAC(newMessage))
    }

    return (
        <Dialogs updateNewMessageText={updateNewMessageText}
                 sendMessage={addMessage}
                 dialogsPage={state}/>
    );
};

