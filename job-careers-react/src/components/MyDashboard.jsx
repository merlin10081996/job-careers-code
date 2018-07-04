import React from 'react';
import {Component} from 'react';
import './login.css';
import {
    Route,
    NavLink,
    HashRouter, Link, BrowserRouter, Switch
} from "react-router-dom";
import Jobid from "./JobId";
import Feedback from "./Feedback";
class MyDashboard extends Component {
    render() {
        return (
            <HashRouter>
                <form>
                    <button type="submit" className="btn btn-default"><b><NavLink to="/Jobid">Applied Jobs</NavLink></b></button>
                    <button type="submit" className="btn btn-default"><b><NavLink to="/Feedback">Feedback</NavLink></b></button>
                    <Route exact path="/Jobid" component={Jobid}/>
                    <Route exact path="/Feedback" component={Feedback}/>
                </form>
            </HashRouter>

        );
    }
}
export default MyDashboard;