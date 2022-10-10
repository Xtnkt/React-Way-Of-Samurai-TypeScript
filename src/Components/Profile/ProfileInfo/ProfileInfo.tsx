import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = (props: any) => {
    return (
        <div>
            <div>
                <img src='https://pbs.twimg.com/profile_banners/958008249068019713/1623959964/1500x500'
                     alt='Ocean'
                     className={s.img}/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
};

