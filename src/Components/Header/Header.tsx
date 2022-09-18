import React from "react";
import s from './Header.module.css';

export const Header = (props: any) => {
    return (
        <div className={s.header}>
            <img src={"https://www.freepnglogos.com/uploads/telegram-logo-png-0.png"} alt={'telegram'}/>
        </div>
    )
}

