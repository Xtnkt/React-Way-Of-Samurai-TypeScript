import React from "react";
import s from './Header.module.css';

export const Header = (props: any) => {
    return (
        <div className={s.header}>
            <img src='https://c.tenor.com/LoYLZWgZo5cAAAAC/pokemon-magikarp.gif'
                 alt='fish logo'/>
            <div className={s.siteName}>
                Fish Place
            </div>
        </div>
    )
}

