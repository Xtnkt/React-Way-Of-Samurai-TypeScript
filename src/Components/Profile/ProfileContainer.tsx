import React from "react";
import {Profile} from "./Profile";
import {ProfileDataType, SetUserProfileAC} from "../../redux/profile-reducer";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

export type ProfilePagePropsType = MapStatePropsType & MapDispatchToProps

type MapStatePropsType = {
    profile: ProfileDataType | null
}
type MapDispatchToProps = {
    setUserProfile: (profile: ProfileDataType | null) => void
}

class ProfileContainer extends React.Component<ProfilePagePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/27077`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}
export default connect(mapStateToProps,
    {setUserProfile: SetUserProfileAC})(ProfileContainer);