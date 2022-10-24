import React, {ChangeEvent, useEffect, useState} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {
    ActionsTypes, addPostActionCreator,
    PostDataType,
    updateNewPostTextActionCreator,
} from "../../../redux/state";


type MyPostsPropsType = {
    postsData: PostDataType[],
    newPostText: string,
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.postsData.map((p) =>
        <Post key={p.id}
              message={p.message}
              likesCount={p.likesCount}/>
    )

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(newText))
    }

    return (
        <div className={s.postsBlock}>
            <h2>
                My posts
            </h2>
            <div>
                <textarea
                    onChange={onChangeTextareaHandler}
                    value={props.newPostText}
                />
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
