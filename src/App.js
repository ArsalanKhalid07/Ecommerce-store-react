import React from "react"
import HomePage from "./Pages/HomePage/HomePage-Component";
import {Route , Switch , Link}  from "react-router-dom"


const TopicsPage = (props) =>  (
    <div>
      <Link to={`${props.match.url}/12`} >page 12 move</Link>
      <Link to={`${props.match.url}/15`} >page 15 move</Link> 
      <Link to={`${props.match.url}/18`} >page 18 move</Link> 
    </div>
)


const TopicDetail = (props) => (
  <div> 
    <button onClick={ () =>  props.history.push("/topics")}>Go back</button>
    <h2>Topics Detail page: { props.match.params.topicid } </h2>
  </div>
)


const Hat = () => (
  <div>
      <h3>Hats page</h3>
  </div>
)

const Jackets = () => (
  <div>
      <h3>jackets page</h3>
  </div>
)



function App() {
  return (
    <div >
      <Switch>
          <Route exact path="/" component={HomePage}  />
          <Route exact path="/topics" component={TopicsPage} />
          <Route exact path="/topics/:topicid" component={TopicDetail}  />
          <Route exact path="/shop/hats" component={Hat} />
          <Route exact path="/shop/jackets" component={Jackets} />
      </Switch>
    </div>
  );
}

export default App;
