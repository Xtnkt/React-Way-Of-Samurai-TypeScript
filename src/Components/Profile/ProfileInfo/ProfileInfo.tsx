import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileDataType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileDataType | null,
    status: string,
    updateStatus: (newStatus: string) => void
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.small}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile?.lookingForAJobDescription}</div>
                <div>{props.profile?.aboutMe}</div>
                <div>{props.profile?.fullName}</div>
                <div>{props.profile?.contacts.facebook}</div>
            </div>
        </div>
    );
};

