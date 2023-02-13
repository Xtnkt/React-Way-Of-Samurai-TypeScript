import React from "react";
import {Profile} from "./Profile";
import {
    getStatusTC,
    getUserProfileTC,
    ProfileDataType,
    SetUserProfileAC,
    updateStatusTC
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: string,
}
type MapStatePropsType = {
    profile: ProfileDataType | null,
    status: string
}
type MapDispatchToProps = {
    setUserProfile: (profile: ProfileDataType | null) => void,
    getUserProfile: (id: string) => void,
    getStatus: (userId: string) => void,
    updateStatus: (newStatus: string) => void
}

export type ProfilePagePropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & MapDispatchToProps

class ProfileContainer extends React.Component<ProfilePagePropsType> {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
        this.props.getStatus(this.props.match.params.userId)
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            setUserProfile: SetUserProfileAC,
            getUserProfile: getUserProfileTC,
            getStatus: getStatusTC,
            updateStatus: updateStatusTC
        }),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer);