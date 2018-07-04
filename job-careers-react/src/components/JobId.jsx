import React from 'react';
import {Component} from 'react';
import './login.css';
import {
    Route,
    NavLink,
    HashRouter, Link, BrowserRouter, Switch
} from "react-router-dom";
//import Designation from "./Designation";

class Jobid extends Component {
    render() {
        return (
            <HashRouter>
                <form>
                    <div>
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Job Name:</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" id="usr" className="form-control" id="sel1" className="col-sm-2"/>

                    </div>
                    <div>
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Job ID:</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" id="usr" className="form-control" id="sel1" className="col-sm-2"/>

                    </div>
                    <div>
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Interview Date:</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" id="usr" className="form-control" id="sel1" className="col-sm-2"/>

                    </div>
                    <div>
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Hiring Manager:</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" id="usr" className="form-control" id="sel1" className="col-sm-2"/>

                    </div>

                </form>
            </HashRouter>

        );
    }
}
export default Jobid;