import React from 'react';
import {connect} from 'react-redux';

import {login} from '../../redux/actionCreators';

import './Login.css';


class LoginComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }

     handleChange = (e) => {
      this.setState({[e.target.name]:e.target.value});
    }

   handleSubmit =  (e)=> {
        e.preventDefault();
        const {userName,password} = this.state;
        this.props.login(userName,password).then(() => {
            this.props.history.push('/dashBoard')   
        });
        }

    render(){
        return (
            <div>
           { !this.props.isLoginPending &&      <div className='card'>
            <h1 style={{textAlign: 'center'}}>USER LOGIN</h1>
              <form className="login-form" onSubmit={this.handleSubmit}>
            <input type="text" name="userName" placeholder="....Enter Username" value={this.state.userName} onChange={this.handleChange}/> 
            <input  type="password" name="password" placeholder="...Password" value={this.state.password} onChange={this.handleChange} />
           <button className="login">LOGIN</button>
        { this.props.loginError && <div>{this.props.loginError.message}</div> }
         </form>
         </div>
    }
         { this.props.isLoginPending && <div class="loader"></div>} 
         </div>
        );
    }
}

const mapStatesToProps = state =>({
    isLoginPending:state.isLoginPending,
    isLoginSuccess:state.isLoginSuccess,
    loginError:state.loginError
})

const mapDispatchToProps = dispatch => ({
    login:(userName,password)=>dispatch(login(userName,password))
})

export default connect(mapStatesToProps,mapDispatchToProps)(LoginComponent);