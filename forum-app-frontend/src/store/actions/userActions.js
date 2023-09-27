import axios from "axios";
import { config } from "../../config/default";

export const fetchRegistration = async (nickname, password) => {
    try {
        const res = await axios.post(config.apiUrl + '/api/auth/registration', {
            nickname, password
        })
        const data = res.data
        alert(data.message)
    } catch (e) {
        alert(e)
    }
}

export const fetchLogin = (nickname, password) => {
    return async dispatch => {
        try {
            const res = await axios.post(config.apiUrl + '/api/auth/login', {
                nickname, password
            })
            const data = res.data
            dispatch(login(data))
            localStorage.setItem('token', data.token)
        } catch (e) {
            alert(e)
        }
    }
}

const login = (data) => ({
    type: 'LOGIN',
    payload: data
})