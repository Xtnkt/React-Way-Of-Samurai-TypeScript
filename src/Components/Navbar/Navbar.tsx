import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Button} from 'antd';
import 'antd/dist/antd.css';

type ButtonsPropsType = {
    id: number;
}

const Buttons = (props: ButtonsPropsType) => {
    if (props.id === 1) {
        return (
            <Button className={s.button} type="primary">Profile</Button>
        )
    } else if (props.id === 2) {
        return (
            <Button className={s.button} type="primary">Dialogs</Button>
        )
    } else if (props.id === 3) {
        return (
            <Button className={s.button} type="primary">News</Button>
        )
    } else if (props.id === 4) {
        return (
            <Button className={s.button} type="primary">Music</Button>
        )
    } else if (props.id === 5) {
        return (
            <Button className={s.button} type="primary">Settings</Button>
        )
    } else {
        return <div></div>
    }
}


export const Navbar = (props: any) => {

    return (
        <div className={s.nav}>
            <div>
                <NavLink to="/profile">
                    <Buttons id={1}/>
                </NavLink>
            </div>
            <div>
                <NavLink to="/dialogs">
                    <Buttons id={2}/>
                </NavLink>
            </div>
            <div>
                <NavLink to="/news">
                    <Buttons id={3}/>
                </NavLink>
            </div>
            <div>
                <NavLink to="/music">
                    <Buttons id={4}/>
                </NavLink>
            </div>
            <div>
                <NavLink to="/settings">
                    <Buttons id={5}/>
                </NavLink>
            </div>
        </div>
    )
}
