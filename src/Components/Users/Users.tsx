import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersDataType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    users: UsersDataType[],
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void,
    isFetching: boolean,
    followingProgress: number[],
    unFollowTC: (id: number) => void
    followTC: (id: number) => void
}

export const Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div>
            <div>
                {slicedPages.map(p => {
                    return <span key={p}
                                 className={props.currentPage === p ? styles.selectedPage : ""}
                                 onClick={() => props.onPageChanged(p)}>
                              .{p}
                        </span>
                })}
            </div>
            {props.users.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                             <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                  className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button className={styles.button}
                                      disabled={props.followingProgress.some((id) => id === u.id)}
                                      onClick={() => {
                                          props.unFollowTC(u.id)
                                      }}>
                                UNFOLLOW</button>
                            : <button className={styles.button}
                                      disabled={props.followingProgress.some((id) => id === u.id)}
                                      onClick={() => {
                                          props.followTC(u.id)
                                      }}>
                                FOLLOW</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        status:<div>{u.status}</div>
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

