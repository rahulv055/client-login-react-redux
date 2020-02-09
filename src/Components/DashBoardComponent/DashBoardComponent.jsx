import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import './DashBoardComponent.css'

class DashBoardComponent extends React.Component {

    logOut = ()=>{
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("authenticated");
     this.props.logOut();
    this.props.history.push("/");
    }

    render(){
        return (
        <div className="dashboard-page">
        <div class="Header">
            DASHBOARD
            <div className="right-panel">
           <span>{localStorage.getItem("username")}</span>
                <div style={{cursor:'Pointer'}} onClick={()=>this.logOut()}>logout</div>
            </div>
            </div>
            <div>EMPLOYEE LIST</div>
    
        <div className="directory-menu">
        <div className="menu-item">
            <div className="menu-header">
            <div className="header-title">name</div>
            <div className="header-title">age</div>
            <div className="header-title">gender</div>
            <div className="header-title2">email</div>
            <div className="header-title2">phoneNo</div>
            </div>
            <div className="underline"></div>
            
             {
                 this.props.employeeList.map(item=>(
                    <div className="menu-header" key={item.id}>
                 <div className="header-title">{item.name}</div>
                 <div className="header-title">{item.age}</div>
                 <div className="header-title">{item.gender}</div>
                 <div className="header-title2">{item.email}</div>
                 <div className="header-title2">{item.phoneNo}</div>
                 </div>
                 ))
             }
         
            </div>
        </div>
        </div>
        )
    }
   
}

const mapStateToProps = state => ({
    employeeList:state.employeeList,
    isLoginSuccess:state.isLoginSuccess,
})

const mapDispatchToProps = dispatch => ({
    logOut:()=>dispatch({type: 'LOG_OUT',payload:false})
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DashBoardComponent));
