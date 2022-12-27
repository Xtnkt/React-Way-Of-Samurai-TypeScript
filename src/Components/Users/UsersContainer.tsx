import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    FollowAC,
    SetCurrentPageAC,
    SetTotalUsersCountAC,
    SetUsersAC, ToggleIsFetchingAC,
    UnFollowAC,
    UsersDataType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

export type UsersPropsType = MapStatePropsType & MapDispatchToProps

type MapStatePropsType = {
    users: UsersDataType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}
type MapDispatchToProps = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UsersDataType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> :null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       unFollow={this.props.unFollow}
                       follow={this.props.follow}
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
        isFetching: state.usersPage.isFetching
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId) => {
            dispatch(FollowAC(userId))
        },
        unFollow: (userId) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(SetUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(SetCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(SetTotalUsersCountAC(totalUsersCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(ToggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, {
    follow: FollowAC,
    unFollow: UnFollowAC,
    setUsers: SetUsersAC,
    setCurrentPage: SetCurrentPageAC,
    setTotalUsersCount: SetTotalUsersCountAC,
    toggleIsFetching: ToggleIsFetchingAC,
})(UsersContainer)

