import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = (props: any) => {
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
                <Post message='Hello' likesCount={4}/>
                <Post message='It-kamasutra' likesCount={8}/>
            </div>
        </div>
    )
}
