import React from "react";
import s from './Navbar.module.css';

export const Navbar = (props: any) => {
    return (
        <div className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Message</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
        </div>
    )
}