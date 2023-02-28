import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddPostFormDataType, AddPostFormRedux} from "./AddPostForm";


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.postsData.map((p) =>
        <Post key={p.id}
              message={p.message}
              likesCount={p.likesCount}/>
    )
    const onAddPostHandler = (formData: AddPostFormDataType) => {
        props.addPost(formData.newPost);
    }
    return (
        <div className={s.postsBlock}>
            <h2>
                My posts
            </h2>
            <AddPostFormRedux onSubmit={onAddPostHandler}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}