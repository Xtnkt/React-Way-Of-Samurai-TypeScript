import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileDataType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileDataType | null
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://pbs.twimg.com/profile_banners/958008249068019713/1623959964/1500x500'
                     alt='Ocean'
                     className={s.img}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.small}/>
                <div>{props.profile?.lookingForAJobDescription}</div>
                <div>{props.profile?.aboutMe}</div>
                <div>{props.profile?.fullName}</div>
                <div>{props.profile?.contacts.facebook}</div>
            </div>
        </div>
    );
};

