import React from 'react';
import s from './Dialogs.module.css'
import {DialogsPropsType} from './DialogsContainer';
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {Message} from "./Message/Message";
import {AddMessageFormRedux, DialogsFormDataType} from "./DialogsAddMessageForm";

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
    const addNewMessage = (formData: DialogsFormDataType) => {
        props.sendMessage(formData.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};

