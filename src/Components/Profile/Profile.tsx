import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = (props: any) => {
    return (
        <div className={s.profile}>
            <div>
                <img src={'https://data2.1freewallpapers.com/detail/sea-horizon-sail.jpg'}/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}
