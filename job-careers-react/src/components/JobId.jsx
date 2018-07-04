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
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Software Engineer</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                    </div>
                    <div>
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Job ID:</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>123457</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                    </div>
                    <div>
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Interview Date:</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>09/07/2018</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    </div>
                    <div>
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Hiring Manager:</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Sai </b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    </div>

                </form>
            </HashRouter>

        );
    }
}
export default Jobid;