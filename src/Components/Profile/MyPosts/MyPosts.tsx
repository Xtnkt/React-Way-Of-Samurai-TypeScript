import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/state";


type MyPostsPropsType = {
    postsData:PostDataType[]
}

export const MyPosts:React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.postsData.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h2>
                My posts
            </h2>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
