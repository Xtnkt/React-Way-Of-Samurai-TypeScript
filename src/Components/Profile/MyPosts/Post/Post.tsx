import React from "react";
import s from './Post.module.css';

type PostType ={
    message: string,
    likesCount: number,
}

export const Post:React.FC<PostType> = (props:PostType) => {
    return (
        <div className={s.post}>
            <img src='https://skesov.ru/wp-content/uploads/2018/04/post_5ade3f348ee95.jpeg'/>
            {props.message}
            <div className={s.likes}>
                <span >{props.likesCount} likes</span>
            </div>
        </div>
    )
}
