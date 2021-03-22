import React, {Component} from "react";
import FormInput from "../form-input/Form-Input-Component";
import CustomButton from "../Custom-Button/Custom-Button-Component";
import {auth, signinwithgoogle} from "../../firebase/firebase.utils";

class SignIn extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }


    handleChange = event => {
        
        const { name, value} = event.target;

        this.setState({
              [name]:value  
        })


    }

    handleSubmit = async event => {     
        event.preventDefault()

        const { email , password } = this.state;


        try {   
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email:'',
                password:''
            })

        } catch(err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Enter email and password for login</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    type="email"
                    value={this.state.email}
                    name="email"
                    label="email"
                    handleChange={this.handleChange}
                    required  />
                    <FormInput
                     type="password" 
                     value={this.state.password}
                     handleChange={this.handleChange}
                     label="password"
                     name="password"
                     required />
                    <div className="button-class">
                        <CustomButton type="submit"  >
                            SignIn
                        </CustomButton>
                        <CustomButton isGoogle onClick={signinwithgoogle}  >
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;