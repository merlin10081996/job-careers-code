import React from 'react';
import {Component} from 'react';
import './login.css';


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

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


    );
    }
}



export default SignUp;