import React from "react";
import {Profile} from "./Profile";
import {getUserProfileTC, ProfileDataType, SetUserProfileAC} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string,
}
type MapStatePropsType = {
    profile: ProfileDataType | null
}
type MapDispatchToProps = {
    setUserProfile: (profile: ProfileDataType | null) => void,
    getUserProfile: (id: string) => void
}

export type ProfilePagePropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & MapDispatchToProps

class ProfileContainer extends React.Component<ProfilePagePropsType> {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
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

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,
    {
        setUserProfile: SetUserProfileAC,
        getUserProfile: getUserProfileTC
    })(WithUrlDataContainerComponent);