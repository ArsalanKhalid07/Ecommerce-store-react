import React from "react";
import SignIn from "../../Components/Sign-In/Sign-In-Component";
import SignUp from "../../Components/Sign-Up/Sign-Up-Component";
import "./Sign-In-and-Sign-up-style.scss";

const SignInAndSignUpPage = () => (
    
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)


export default SignInAndSignUpPage;