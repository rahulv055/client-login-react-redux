import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import LoginComponent from './Components/LoginComponent/LoginComponent.jsx';
import DashBoardComponent from './Components/DashBoardComponent/DashBoardComponent'
import './App.css';



const PrivateRoute=({component:Component,...rest})=>(
   <Route {...rest} render={(props)=>(
     localStorage.getItem('authenticated') === "true"
     ? <Component {...props}/>
     : <Redirect to="/"/>
   )}/>
)
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginComponent} />
        <PrivateRoute exact path="/dashBoard" component={DashBoardComponent} />
      </Switch>
    </div>
  );
}

export default App;
