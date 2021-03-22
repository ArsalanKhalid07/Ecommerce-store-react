import React, {Component} from "react";
import {auth , createUserProfileDocument} from "../../firebase/firebase.utils";
import FormInput from "../form-input/Form-Input-Component";
import CustomButton from "../Custom-Button/Custom-Button-Component";
import "./Sign-Up-Styles.scss";

class SignUp extends Component {

    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password:'',
            confrimPassword:''
        }
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const {displayName, email, password,confrimPassword } = this.state;

        if(password !== confrimPassword ){
            alert("password not match ");
            return;
        }

        try {
            
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await  createUserProfileDocument(user, {displayName});
            
            this.setState({
                displayName: '',
                email: '',
                password:'',
                confrimPassword:''
            }) 

        }
        catch(err){
            console.log(err);
        }
    }


    handleChange = (event) => {
        const { name , value } = event.target;
        
        this.setState({
            [name]: value
        });
    }


    render() {
        const {displayName, email, password,confrimPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">If you have not account then sign up</h2>
                <span>Create an account</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    name="displayName"
                    type="text"
                    label="display Name"
                    value={displayName}
                    onChange={this.handleChange}
                    required
                    />

                    <FormInput
                    name="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={this.handleChange}
                    required
                    />

                    <FormInput
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={this.handleChange}
                    required
                    />

                    <FormInput
                    name="confrimPassword"
                    type="password"
                    label="Confrim Password"
                    value={confrimPassword}
                    onChange={this.handleChange}
                    required
                    />

                <CustomButton type="submit" >
                    SignUp 
                </CustomButton>                  

                </form>
            </div>
        )
    }
}


export default SignUp;