import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {Message} from "./Message/Message";
import {
    ActionsTypes,
    addMessageActionCreator,
    DialogsPageType,
    updateNewMessageTextActionCreator
} from "../../redux/state";


type DialogsPropsType = {
    dialogsPage: DialogsPageType,
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsElements = props.dialogsPage.dialogsData.map((d) =>
        <DialogsItems key={d.id}
                      id={d.id}
                      name={d.name}/>
    )
    const messagesElements = props.dialogsPage.messagesData.map((m) =>
        <Message key={m.id}
                 message={m.message}/>
    )
    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value
        props.dispatch(updateNewMessageTextActionCreator(newMessage))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea value={props.dialogsPage.newMessageText}
                          onChange={onChangeTextareaHandler}
                placeholder='Enter your message'/>
            </div>
            <div>
                <button onClick={addMessage}>add message</button>
            </div>

        </div>
    );
};

