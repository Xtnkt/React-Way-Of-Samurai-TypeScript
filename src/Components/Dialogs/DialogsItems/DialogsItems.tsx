import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemsPropsType = {
    id: number,
    name: string,
};

export const DialogsItems = (props: DialogsItemsPropsType) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={`${s.item} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

