import {AppStateType} from "../redux-store";
import {createSelector} from "reselect";
import {UsersDataType} from "../users-reducer";

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUsersSuperSelector = createSelector(getUsersSelector, (users: UsersDataType[]) => {
    return users.filter(u => true)
})
export const getPageSizeSelector = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCountSelector = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPageSelector = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetchingSelector = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingProgressSelector = (state: AppStateType) => {
    return state.usersPage.followingProgress
}


