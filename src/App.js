import React from "react"
import HomePage from "./Pages/HomePage/HomePage-Component";
import {Route , Switch, Redirect }  from "react-router-dom"
import ShopPage from "./Pages/shop/Shop-Component";
import "./App.css";
import { connect } from "react-redux";
import Header from "../src/Components/Header/Header-Component";
import SignInAndSignUp from "./Pages/Sign-In-and-Sign-up/Sign-In-and-Sign-up-component";
import {auth , createUserProfileDocument} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/UserAction";


class App extends React.Component {
 

  unsubcribefromauth = null;

  componentDidMount() {
      const {setCurrentUser} = this.props;
      this.unsubcribefromauth = auth.onAuthStateChanged( async userAuth => {
        if(userAuth) {
          const userRef  = await createUserProfileDocument(userAuth);
          userRef.onSnapshot( snapshot => {
               setCurrentUser({
                  id: snapshot.id,
                  ...snapshot.data()
                });
              });
        }

        setCurrentUser(userAuth);
    });    
  }

  componentWillUnmount() {
    this.unsubcribefromauth();
  }


  render() {
    return (
      <div >
      <Header  />
        <Switch>
            <Route exact path="/" component={HomePage}  />
            <Route exact path="/shop" component={ShopPage}  />
            <Route exact path="/signin"  render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />)} /> 
        </Switch>
      </div>
      );
  }
}


const mapStateToProps = ({user}) => ({
  currentUser:user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);