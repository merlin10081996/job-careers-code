import React from 'react';
import {Component} from 'react';
import './login.css';
import vzLogo from './images/vz.png';
import SignUp from './SignUp';
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


class App extends Component {
    render() {
        return (
            <HashRouter>
            <form>
               <div className="form-group">
                   <img src={vzLogo} width={100} height={5} alt="..." className="img-thumbnail" /></div>
                   <div>
               <button type="submit" className="btn btn-primary"><b>About Us</b></button>
                       <button type="submit" className="btn btn-primary"><b><NavLink to="/Designation">Careers</NavLink></b></button>
                       <Route exact path="/Designation" component={Designation}/>
                       <Route  path="/DesignationDetails" component={DesignationDetails}/>
                       <Route  path="/DesignSW" component={DesignSW}/>
                       <Route  path="/DesignAn" component={DesignAn}/>
                       <Route  path="/DesignSp" component={DesignSp}/>
                       <Route  path="/ApplyButton" component={ApplyButton}/>
               </div>
            </form>
            </HashRouter>

        );
    }
}
export default App;