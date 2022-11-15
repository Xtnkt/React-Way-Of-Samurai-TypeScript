import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import { DialogsPropsType } from './DialogsContainer';
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {Message} from "./Message/Message";

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const state = props.dialogsPage

    const dialogsElements = state.dialogsData.map((d) =>
        <DialogsItems key={d.id}
                      id={d.id}
                      name={d.name}/>
    )
    const messagesElements = state.messagesData.map((m) =>
        <Message key={m.id}
                 message={m.message}/>
    )
    const addMessage = () => {
        props.sendMessage()
    }
    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value
        props.updateNewMessageText(newMessage)
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

