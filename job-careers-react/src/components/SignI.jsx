import React from 'react';
import {Component} from 'react';
import './login.css';
import SignUp from './SignUp';
import ApplyButton from './ApplyButton';
import {
    Route,
    NavLink,
    HashRouter, Link, BrowserRouter, Switch
} from "react-router-dom";


class SignIn extends Component {
    render() {
        return (
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
                <button type="submit" className="btn btn-default"><NavLink to="/ApplyButton">Submit</NavLink></button>
                <Route  path="/ApplyButton" component={ApplyButton}/>

                <i>New User?</i><button type="button" className="btn btn-default"><NavLink to="/SignUp">Sign Up</NavLink></button>
                <Route  path="/SignUp" component={SignUp}/>

            </form>

    );
    }
}
export default SignIn;