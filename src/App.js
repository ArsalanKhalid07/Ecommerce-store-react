import React from "react"
import HomePage from "./Pages/HomePage/HomePage-Component";
import {Route , Switch }  from "react-router-dom"
import ShopPage from "./Pages/shop/Shop-Component";
import "./App.css";
import Header from "../src/Components/Header/Header-Component";
import SignInAndSignUp from "./Pages/Sign-In-and-Sign-up/Sign-In-and-Sign-up-component";
import {auth , createUserProfileDocument} from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAuth:null
    }
  }

  unsubcribefromauth = null;

  componentDidMount() {
     this.unsubcribefromauth = auth.onAuthStateChanged( async userAuth => {
        if(userAuth) {
          const userRef  = await createUserProfileDocument(userAuth);
          userRef.onSnapshot( snapshot => {
              this.setState({
                currentAuth: {
                  id: snapshot.id,
                  ...snapshot.data()
                }
              }, () => {
                console.log(this.state)
              })
          }) 
        }

        this.setState({currentAuth:userAuth});
    });    
  }

  componentWillUnmount() {
    this.unsubcribefromauth();
  }


  render() {
    return (
      <div >
      <Header currentUser={this.state.currentAuth} />
        <Switch>
            <Route exact path="/" component={HomePage}  />
            <Route exact path="/shop" component={ShopPage}  />
            <Route path="/signin" component={SignInAndSignUp} /> 
        </Switch>
      </div>
      );
  }
}

export default App;
