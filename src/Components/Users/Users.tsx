import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

export const Users: React.FC<UsersPropsType> = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>UNFOLLOW</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>FOLLOW</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

