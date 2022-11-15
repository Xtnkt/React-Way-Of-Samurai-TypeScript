import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}
// export const Profile: React.FC<ProfilePropsType> = (props) => {
//     return (
//         <div>
//             <ProfileInfo/>
//             <MyPostsContainer store={props.store}/>
//         </div>
//     )
// }