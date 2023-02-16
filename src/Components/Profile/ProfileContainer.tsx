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
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

type PathParamsType = {
    userId: any,
}
type MapStatePropsType = {
    profile: ProfileDataType | null,
    status: string
}
type MapDispatchToProps = {
    setUserProfile: (profile: ProfileDataType | null) => void,
    getUserProfile: (id: number) => void,
    getStatus: (userId: number) => void,
    updateStatus: (newStatus: string) => void
}

export type ProfilePagePropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & MapDispatchToProps

class ProfileContainer extends React.Component<ProfilePagePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 26598
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
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
)(ProfileContainer);