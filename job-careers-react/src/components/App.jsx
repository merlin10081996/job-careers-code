import React from 'react';
import {Component} from 'react';
import './login.css';
import vzLogo from './images/vz.png';
import {
    Route,
    NavLink,
    HashRouter, Link, BrowserRouter, Switch
} from "react-router-dom";
import DesignationDetails from "./DesignationDetails";
import Designation from "./Designation";
import DesignSp from "./DesignSp";
import DesignSW from "./DesignSW";
import DesignAn from "./DesignAn";
import ApplyButton from "./ApplyButton";
import Resume from "./Resume";
import Upload from "./Upload";
import AboutUs from "./AboutUs";
import SignI from "./SignI";
import SignUp from './SignUp';
import AppliedJobs from "./AppliedJobs";
import MyDashboard from "./MyDashboard";
import Jobid from "./JobId";
import Feedback from "./Feedback";
class App extends Component {
    render() {
        return (
            <HashRouter>
            <form>
               <div className="form-group">
                   <img src={vzLogo} width={100} height={5} alt="..." className="img-thumbnail" />
               </div>
               <button type="submit" className="btn btn-default"><b><NavLink to="/AboutUs">About Us</NavLink></b></button>
                <button type="submit" className="btn btn-default"><b><NavLink to="/Designation">Careers</NavLink></b></button>
                <button type="submit" className="btn btn-default"><b><NavLink to="/MyDashboard">My Dashboard</NavLink></b></button>
                       <Route exact path="/AboutUs" component={AboutUs}/>

                       <Route exact path="/Designation" component={Designation}/>
                       <Route  path="/DesignationDetails" component={DesignationDetails}/>
                       <Route  path="/DesignSW" component={DesignSW}/>
                       <Route  path="/DesignAn" component={DesignAn}/>
                       <Route  path="/DesignSp" component={DesignSp}/>
                       <Route  path="/ApplyButton" component={ApplyButton}/>
                       <Route exact path="/Resume" component={Resume}/>
                       <Route exact path="/Upload" component={Upload}/>
                       <Route exact path="/SignI" component={SignI}/>
                <Route exact path="/AppliedJobs" component={AppliedJobs}/>
                <Route  path="/SignUp" component={SignUp}/>
                <Route  path="/MyDashboard" component={MyDashboard}/>
                <Route  path="/Jobid" component={Jobid}/>
                <Route exact path="/Feedback" component={Feedback}/>
            </form>
            </HashRouter>

        );
    }
}
export default App;