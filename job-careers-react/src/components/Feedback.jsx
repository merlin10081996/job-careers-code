import React from 'react';
import {Component} from 'react';
import './login.css';
import {
    Route,
    NavLink,
    HashRouter, Link, BrowserRouter, Switch
} from "react-router-dom";
//import Designation from "./Designation";

class Feedback extends Component {
    render() {
        return (
            <HashRouter>
                <form>
                    <div>
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Comments</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <textarea className="form-control" rows="5" id="comment" className="col-sm-2"></textarea>
                    </div>

                </form>
            </HashRouter>

        );
    }
}
export default Feedback;
