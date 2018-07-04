import React from 'react';
import {Component} from 'react';
import './login.css';
import ApplyButton from './ApplyButton';
import {
    Route,
    NavLink,
    HashRouter, Link, BrowserRouter, Switch
} from "react-router-dom";

class SignUp extends Component {
    render() {
        return(
            <form>
                <div className="form-group" class="col-md-6">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" width="100" className="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           placeholder="Enter email"/>

                </div>
                <div className="form-group" class="col-md-6">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group" class="col-md-6">
                    <label htmlFor="exampleInputPassword1"> Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>

                <button type="submit" className="btn btn-default"><NavLink to="/ApplyButton">Submit</NavLink></button>
                <Route  path="/ApplyButton" component={ApplyButton}/>

            </form>


    );
    }
}



export default SignUp;