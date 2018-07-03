import React from 'react';
import {Component} from 'react';
import './login.css';
import vzLogo from './images/vz.png'
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import ApplyButton from './ApplyButton';
import Resume from './Resume';
import DesignationDetails from "./DesignationDetails";
import App from "./App";


class Upload extends Component {
    render() {
        return(
            <HashRouter>
                <form>
                    <div className="form-group">
                        Upload Resume  <input type="file"/>
                    </div>
                    <div><button type="submit" className="btn btn-toolbar">Submit</button></div>
                    <div><button type="submit" className="btn btn-default"><NavLink to="/ApplyButton">Back </NavLink></button>
                        <Route exact path="/ApplyButton" component={ApplyButton}/></div>
            </form>
            </HashRouter>

        );
    }
}
export default Upload;