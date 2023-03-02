import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean,
    login: string | null
    logout: () => void
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
                {props.isAuth
                    ? <div>{props.login}
                        <button onClick={props.logout}>Log out</button>
                    </div>

                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>

    )

}

