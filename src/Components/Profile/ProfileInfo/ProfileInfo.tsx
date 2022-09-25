import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = (props:any) => {
    return (
        <div>
            <div>
                <img src={'https://data2.1freewallpapers.com/detail/sea-horizon-sail.jpg'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
};

