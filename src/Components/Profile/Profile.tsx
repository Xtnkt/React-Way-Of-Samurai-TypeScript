import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType,
}

// export const Profile: React.FC<ProfilePropsType> = (props) => {
//     return (
//         <div>
//             <ProfileInfo/>
//             <MyPostsContainer store={props.store}/>
//         </div>
//     )
// }
export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}