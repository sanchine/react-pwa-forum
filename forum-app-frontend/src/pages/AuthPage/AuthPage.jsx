import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './AuthPage.css' 
import { fetchLogin, fetchRegistration } from "../../store/actions/userActions";

export const AuthPage = () => {

    const navigate = useNavigate()
    const isAuth = useSelector((state) => state.user.isAuth);

    const dispatch = useDispatch()
    
    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")

    const registration = () => {
        dispatch(fetchRegistration(nickname, password))
    }

    const login = () => {
        dispatch(fetchLogin(nickname, password))
    }

    if (isAuth) {
        navigate('/posts')
    }

    return (
        <div className="Auth">
            <form className="auth_form" method="POST">
                <label>Nickname</label>
                <input className="auth_form_input" type="text" value={nickname} onChange={(event) => setNickname(event.target.value)} />
                <label>Password</label>
                <input className="auth_form_input" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <div className="auth_form_buttons_block">
                    <input className="auth_form_button" type="button" value="Регистрация" onClick={registration} />
                    <input className="auth_form_button" type="button" value="Авторизация" onClick={login} />
                </div>
            </form>
        </div>
    )
}