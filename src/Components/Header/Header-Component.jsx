import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo } from "../../assets/logo.svg";
import {connect } from "react-redux";
import "./Header-styles.scss";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/Cart-Icon-Component";
import CartDrop from "../Cart-DropDown/CartDrop-Component";


const Header = ({currentUser, hidden}) => (
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
        <CartIcon />
        </div>

        {
            hidden ?
                null
             :
             <CartDrop /> 
        }
         
    </div>
    </>
)


const mapStateToProps = ({ user:{currentUser} , cart:{hidden} }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);