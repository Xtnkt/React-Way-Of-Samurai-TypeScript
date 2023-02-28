import React from "react";
import {AddPostAC, PostDataType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

export type MyPostsPropsType = MapStateToProps & MapDispatchToProps

type MapStateToProps = {
    postsData: PostDataType[],
    newPostText: string,
}
type MapDispatchToProps = {
    addPost: (newPost: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPost: (newPost: string) => {
            dispatch(AddPostAC(newPost))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
