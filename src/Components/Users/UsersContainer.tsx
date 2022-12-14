import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    FollowAC,
    SetCurrentPageAC,
    SetTotalUsersCountAC,
    SetUsersAC, ToggleIsFetchingAC, ToggleIsFollowingProgressAC,
    UnFollowAC,
    UsersDataType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

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
    setTotalUsersCount: (totalUsersCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
    toggleIsFollowingProgress: (isFetching: boolean, userId:number) => void,
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
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
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

export default connect(mapStateToProps, {
    follow: FollowAC,
    unFollow: UnFollowAC,
    setUsers: SetUsersAC,
    setCurrentPage: SetCurrentPageAC,
    setTotalUsersCount: SetTotalUsersCountAC,
    toggleIsFetching: ToggleIsFetchingAC,
    toggleIsFollowingProgress: ToggleIsFollowingProgressAC
})(UsersContainer)


// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         follow: (userId) => {
//             dispatch(FollowAC(userId))
//         },
//         unFollow: (userId) => {
//             dispatch(UnFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(SetUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(SetCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(SetTotalUsersCountAC(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(ToggleIsFetchingAC(isFetching))
//         }
//     }
// }
