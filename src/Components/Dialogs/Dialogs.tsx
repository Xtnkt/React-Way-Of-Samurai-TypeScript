import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    dialogsPage: DialogsPageType,
    updateNewMessageText: (newMessage: string) => void
    addMessage:()=>void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map((d) =>
        <DialogsItems key={d.id}
                      id={d.id}
                      name={d.name}/>
    )
    let messagesElements = props.dialogsPage.messagesData.map((m) =>
        <Message key={m.id}
                 message={m.message}/>
    )


    const addMessage = () => {
        props.addMessage()
    }
    const onChangeTextareaHandler =(e:ChangeEvent<HTMLTextAreaElement>) => {
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
                <textarea onChange={onChangeTextareaHandler}
                          value={props.dialogsPage.newMessageText}/>
            </div>
            <div>
                <button onClick={addMessage}>add message</button>
            </div>

        </div>
    );
};

