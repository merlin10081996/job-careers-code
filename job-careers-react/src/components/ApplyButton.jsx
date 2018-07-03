import React from 'react';
import {Component} from 'react';
import './login.css';
import vzLogo from './images/vz.png'
import Resume from './Resume';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import Upload from "./Upload";
import DesignationDetails from "./DesignationDetails";
import App from "./App";


class ApplyButton extends Component {
    render() {
        return(
        <HashRouter>
        <form>
        <div className="form-group">
            <div>
                <a className="nav-link" href="#"> <NavLink to="/Upload">Upload Resume </NavLink></a>
                <Route exact path="/Upload" component={Upload}/>
            </div>
                <div>

                    <a className="nav-link" href="#"> <NavLink to="/Resume">Create Resume </NavLink></a>
                    <Route exact path="/Resume" component={Resume}/>
                </div>
            <Route exact path="/Resume" component={Resume}/>
        </div>
            </form>
        </HashRouter>

    );
}
}
export default ApplyButton;