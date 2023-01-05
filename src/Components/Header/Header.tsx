import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean,
    login: string | null
}
export const Header = (props: HeaderPropsType) => {
    return (
        <div className={s.header}>
            <img src='https://c.tenor.com/LoYLZWgZo5cAAAAC/pokemon-magikarp.gif'
                 alt='fish logo'/>
            <div className={s.siteName}>
                Fish Place
            </div>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>

    )

}

