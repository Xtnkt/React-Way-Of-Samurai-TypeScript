import React from "react";
import {Profile} from "./Profile";
import {getUserProfileTC, ProfileDataType, SetUserProfileAC} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string,
}
type MapStatePropsType = {
    profile: ProfileDataType | null,
    isAuth: boolean
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
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile {...this.props} />
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,
    {
        setUserProfile: SetUserProfileAC,
        getUserProfile: getUserProfileTC
    })(WithUrlDataContainerComponent);