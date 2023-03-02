import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthTC, logoutTC, SetAuthUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type MapStateToProps = {
    isAuth: boolean,
    login: string | null
}
type MapDispatchToProps = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => void,
    getAuth: () => void,
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

    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

export default connect(mapStateToProps,
    {
        setAuthUserData: SetAuthUserDataAC,
        getAuth: getAuthTC,
        logout: logoutTC
    })(HeaderContainer)

