import React from 'react';
import {Component} from 'react';
import './login.css';
import vzLogo from './images/vz.png'
import Resume from './Resume';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import DesignationDetails from "./DesignationDetails";
import App from "./App";


class ApplyButton extends Component {
    render() {
        return(
        <HashRouter>
        <form>
        <div className="form-group">
            <img src={vzLogo} width={100} height={5} alt="..." className="img-thumbnail" /></div>
               <div>
                    <a className="nav-link" href="#"> Upload Resume </a>
                </div>
                <div>
                    <a className="nav-link" href="#"> <NavLink to="/Resume">Create Resume </NavLink></a>
                </div>
            <Route exact path="/Resume" component={Resume}/>
            </form>
        </HashRouter>

    );
}
}
export default ApplyButton;