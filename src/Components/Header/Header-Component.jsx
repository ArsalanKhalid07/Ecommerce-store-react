import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo } from "../../assets/logo.svg";
import {connect } from "react-redux";
import "./Header-styles.scss";
import { auth } from "../../firebase/firebase.utils";


const Header = ({currentUser}) => (
    <>
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options"   >
        <Link className="option" to="/shop">
            Shop
        </Link>
        <Link className="option" to="/shop">
            Contact
        </Link>

        {
            currentUser ? 
            <div className='option' onClick={() => auth.signOut() }>
                Sign Out
            </div>
            :
            (
            <Link  className="option" to="/signin" > Sign In </Link>
            )
        }
    </div>
    </div>
    </>
)


const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);