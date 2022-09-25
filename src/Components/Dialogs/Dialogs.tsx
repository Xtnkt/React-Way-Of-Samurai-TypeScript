import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {Message} from "./Message/Message";

export const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               <DialogsItems id={1} name='Vlad' />
               <DialogsItems id={2} name='Roma' />
               <DialogsItems id={3} name='Dima' />
               <DialogsItems id={4} name='Masha' />
            </div>
            <div className={s.messages}>
               <Message message='Hello' />
               <Message message='How are y?' />
               <Message message='It-kamasutra' />
            </div>
        </div>
    );
};

