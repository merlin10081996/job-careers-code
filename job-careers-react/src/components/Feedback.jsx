import React from 'react';
import {Component} from 'react';
import './login.css';
import {
    Route,
    NavLink,
    HashRouter, Link, BrowserRouter, Switch
} from "react-router-dom";
import ApplyButton from "./ApplyButton";
import MyDashboard from "./MyDashboard";

class Feedback extends Component {
    render() {
        return (
            <HashRouter>
                <form>
                    <div>
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Comments</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <textarea className="form-control" rows="5" id="comment" className="col-sm-2"></textarea>

                            <div>
                            < button type = "submit" className = "btn btn-default" data-toggle = "collapse" data-target ="#demo" >Submit</button>
                            <div id="demo" class="collapse">Feedback is Successfully Submitted.</div>

                            <button type="button" className="btn btn-default"><NavLink to="/MyDashboard">Back </NavLink></button>
                           <div> <Route exact path="/MyDashboard" component={MyDashboard}/></div>
                        </div>
                    </div>
                </form>
            </HashRouter>
        );
    }
}
export default Feedback;




