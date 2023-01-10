import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthType, SetAuthUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

export type HeaderPropsType = MapStateToProps & MapDispatchToProps
type MapStateToProps = {
    isAuth: boolean,
    login: string | null
}
type MapDispatchToProps = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        authAPI.getAuth()
            .then((data)=>{
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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
    {setAuthUserData: SetAuthUserDataAC})(HeaderContainer)

