import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostDataType,} from "../../../redux/store";

type MyPostsPropsType = {
    updateNewPostText:(newText: string)=>void,
    addPost:()=>void,
    postsData: PostDataType[],
    newPostText: string,
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.postsData.map((p) =>
        <Post key={p.id}
              message={p.message}
              likesCount={p.likesCount}/>
    )
    const onAddPostHandler = () => {
        props.addPost();
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
                <button onClick={onAddPostHandler}>add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
