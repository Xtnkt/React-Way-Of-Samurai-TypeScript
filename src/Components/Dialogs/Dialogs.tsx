import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    dialogsPage:DialogsPageType,
}

export const Dialogs:React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map((d) => <DialogsItems id={d.id} name={d.name}/>)
    let messagesElements = props.dialogsPage.messagesData.map((m) => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

