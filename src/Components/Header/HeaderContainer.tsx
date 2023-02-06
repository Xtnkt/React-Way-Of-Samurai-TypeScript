import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import { getAuthTC, SetAuthUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

export type HeaderPropsType = MapStateToProps & MapDispatchToProps
type MapStateToProps = {
    isAuth: boolean,
    login: string | null
}
type MapDispatchToProps = {
    setAuthUserData: (id: number, email: string, login: string) => void,
    getAuth:()=> void
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

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps,
    {setAuthUserData: SetAuthUserDataAC,
        getAuth:getAuthTC})(HeaderContainer)

