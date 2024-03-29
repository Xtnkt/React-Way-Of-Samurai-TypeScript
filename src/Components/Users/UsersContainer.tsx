import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    FollowAC, followTC, getUsersTC,
    SetCurrentPageAC,
    SetUsersAC, ToggleIsFollowingProgressAC,
    UnFollowAC, unFollowTC,
    UsersDataType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPageSelector, getFollowingProgressSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector, getUsersSuperSelector
} from "../../redux/selectors/users-selector";

export type UsersContainerPropsType = MapStatePropsType & MapDispatchToProps

type MapStatePropsType = {
    users: UsersDataType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingProgress: number[]
}
type MapDispatchToProps = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UsersDataType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void,
    unFollowTC: (id: number) => void
    followTC: (id: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       unFollow={this.props.unFollow}
                       follow={this.props.follow}
                       isFetching={this.props.isFetching}
                       toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                       followingProgress={this.props.followingProgress}
                       unFollowTC={this.props.unFollowTC}
                       followTC={this.props.followTC}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingProgress: getFollowingProgressSelector(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow: FollowAC,
        unFollow: UnFollowAC,
        setUsers: SetUsersAC,
        setCurrentPage: SetCurrentPageAC,
        toggleIsFollowingProgress: ToggleIsFollowingProgressAC,
        getUsers: getUsersTC,
        unFollowTC: unFollowTC,
        followTC: followTC
    }),
)(UsersContainer)
