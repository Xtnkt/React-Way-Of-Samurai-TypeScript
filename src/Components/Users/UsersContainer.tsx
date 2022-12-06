import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {FollowAC, SetUsersAC, UnFollowAC, UsersDataType} from "../../redux/users-reducer";
import {Dispatch} from "redux";


export type UsersPropsType = MapStatePropsType & MapDispatchToProps

type MapStatePropsType = {
    users: UsersDataType[]
}
type MapDispatchToProps = {
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: any) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: string) => {
            dispatch(FollowAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(SetUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

