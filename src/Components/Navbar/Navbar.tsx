import React, {FC} from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Button} from 'antd';
import 'antd/dist/antd.css';
import {FriendsDataType, StoreType} from "../../redux/store";
import {FriendsPropsType} from "./NavBarContainer";

type ButtonsPropsType = {
    id: number;
}

export const Navbar:React.FC<FriendsPropsType> = (props) => {
    const state = props.friendsNavBar

    const friendsDataElements = state.friendsData.map((f: FriendsDataType) =>
        <div key={f.id} className={s.item}>
            <img src={f.img}/>
            <b>{f.name}</b>
        </div>)
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
            <div>
                <NavLink to="/friends">
                    <Buttons id={6}/>
                </NavLink>
            </div>
            <div className={s.container}>
                {friendsDataElements}
            </div>
        </div>
    )
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
    } else if (props.id === 6) {
        return (
            <Button className={s.button_friends} type="primary">Friends</Button>
        )
    } else {
        return <div></div>
    }
}
// export const Navbar:React.FC<NavbarPropsType> = (props) => {
//
//     const state = props.store.getState()
//
//     const friendsDataElements = state.friendsPage.friendsData.map((f: FriendsDataType) =>
//         <div key={f.id} className={s.item}>
//             <img src={f.img}/>
//             <b>{f.name}</b>
//         </div>)
//
//     return (
//         <div className={s.nav}>
//             <div>
//                 <NavLink to="/profile">
//                     <Buttons id={1}/>
//                 </NavLink>
//             </div>
//             <div>
//                 <NavLink to="/dialogs">
//                     <Buttons id={2}/>
//                 </NavLink>
//             </div>
//             <div>
//                 <NavLink to="/news">
//                     <Buttons id={3}/>
//                 </NavLink>
//             </div>
//             <div>
//                 <NavLink to="/music">
//                     <Buttons id={4}/>
//                 </NavLink>
//             </div>
//             <div>
//                 <NavLink to="/settings">
//                     <Buttons id={5}/>
//                 </NavLink>
//             </div>
//             <div>
//                 <NavLink to="/friends">
//                     <Buttons id={6}/>
//                 </NavLink>
//             </div>
//             <div className={s.container}>
//                 {friendsDataElements}
//             </div>
//         </div>
//     )
// }