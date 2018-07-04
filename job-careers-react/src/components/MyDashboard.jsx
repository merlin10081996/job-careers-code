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
import Upload from "./Upload";
import Resume from "./Resume";
class MyDashboard extends Component {
    render() {
        return (
            <HashRouter>
                <form>
                    <div>
                        <a className="nav-link" href="#"> <NavLink to="/Jobid">Applied Jobs</NavLink></a>
                        <Route exact path="/Jobid" component={Jobid}/>
                    </div>
                    <div>
                        <a className="nav-link" href="#"> <NavLink to="/Feedback">Feedback</NavLink></a>
                        <Route exact path="/Feedback" component={Feedback}/>
                    </div>

                </form>
            </HashRouter>

        );
    }
}
export default MyDashboard;