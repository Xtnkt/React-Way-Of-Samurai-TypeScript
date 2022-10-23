import React, {ChangeEvent, useEffect, useState} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/state";


type MyPostsPropsType = {
    postsData: PostDataType[],
    addPost: () => void,
    newPostText: string,
    updateNewPostText: (newText: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.postsData.map((p) =>
        <Post key={p.id}
              message={p.message}
              likesCount={p.likesCount}/>
    )

    const addPost = () => {
        props.addPost()
    }

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.updateNewPostText(newText)
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
