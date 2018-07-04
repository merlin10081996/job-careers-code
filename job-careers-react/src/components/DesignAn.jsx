import React from 'react';
import {Component} from 'react';
import './login.css';
import vzLogo from './images/vz.png';
import {
    Route,
    NavLink,
    HashRouter, Link, BrowserRouter, Switch
} from "react-router-dom";
import SignIn from './SignIn';
class DesignAn extends Component {
    render() {
        return (
            <form>
                <div><b>Analyst</b></div>
                <div><b>Job ID</b>:123458</div>
                <div><b>Job Description</b> : Techies who can transform the way we work on the inside to improve the experience we deliver on the outside</div>
                <div>A great technology company is powered by great technology, and by great people who push the boundaries,</div>
                <div>create solutions from scratch and turn big data into smart insights. Be the face of the digital world.</div>
                <div>
                    <button type="submit" className="btn btn-default"><b><NavLink to="/SignIn">Apply</NavLink></b></button>
                    <Route  path="/SignIn" component={SignIn}/>
                </div>

            </form>


        );
    }
}
export default DesignAn;