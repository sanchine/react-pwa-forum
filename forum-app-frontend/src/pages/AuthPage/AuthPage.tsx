import React from "react";
import { Link } from "react-router-dom";
import './AuthPage.css' 

export const AuthPage = () => {
    return (
        <div className="Auth">
            {/* <label>AuthPage</label>
            <nav>
                <Link to="/posts">К постам</Link>
            </nav> */}
            <form className="auth_form" method="POST">
                <label>Nickname</label>
                <input className="auth_form_input" type="text" />
                <label>Password</label>
                <input className="auth_form_input" type="password" />
                <div className="auth_form_buttons_block">
                    <input className="auth_form_button" type="button" value="Sign In" />
                    <input className="auth_form_button" type="button" value="Sign Up" />
                </div>
            </form>
        </div>
    )
}