import React from "react";
import {StoreType,} from "../../../redux/store";
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer = () => {

    //const state = props.store.getState()

    // const addPost = () => {
    //     props.store.dispatch(AddPostAC())
    // }
    // const onPostChange = (newText: string) => {
    //     props.store.dispatch(UpdateNewPostTextAC(newText))
    // }

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()
                const addPost = () => {
                    store.dispatch(AddPostAC())
                }
                const onPostChange = (newText: string) => {
                    store.dispatch(UpdateNewPostTextAC(newText))
                }
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                postsData={state.profilePage.postsData}
                                newPostText={state.profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )
}