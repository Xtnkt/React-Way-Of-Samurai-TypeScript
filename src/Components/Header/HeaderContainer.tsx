import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logoutTC, SetAuthUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type MapStateToProps = {
    isAuth: boolean | null,
    login: string | null
}
type MapDispatchToProps = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => void,
    logout: () => void
}
export type HeaderPropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

class HeaderContainer extends React.Component<HeaderPropsType> {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

export default connect(mapStateToProps,
    {
        setAuthUserData: SetAuthUserDataAC,
        logout: logoutTC
    })(HeaderContainer)

