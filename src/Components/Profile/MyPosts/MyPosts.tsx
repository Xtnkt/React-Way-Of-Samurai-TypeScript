import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = (props: any) => {
    return (
        <div>
            <div>
                My posts
            </div>
            <textarea></textarea>
            <button>add</button>
            <Post message='Hello' likesCount={4}/>
            <Post message='It-kamasutra' likesCount={8}/>
        </div>
    )
}
