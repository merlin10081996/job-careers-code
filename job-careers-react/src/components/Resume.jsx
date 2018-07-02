import React from 'react';
import {Component} from 'react';
//import './login.css';
import vzLogo from './images/vz.png';


class Resume extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <img src={vzLogo} width={100} height={5} alt="..." className="img-thumbnail" /></div>

                <div>

                    <button type="submit" className="btn btn-primary"><b>Careers</b></button>
                </div>

                <div>
                    <label>First Name</label>
                    <input type="text"  id="usr"/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text"  id="usr"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text"  id="usr"/>
                </div>
                <div>
                    <label htmlFor="sel1">Country</label>
                    <select className="form-control" id="sel1">
                        <option>Ind</option>
                        <option>US</option>
                        <option>China</option>
                        <option>Japan</option>
                    </select>
                </div>
                <div>
                    <label>Zip Code</label>
                    <input type="text"  id="usr"/>
                </div>
                <div>
                    <label>City</label>
                    <input type="text"  id="usr"/>
                </div>
                <div>
                    <label htmlFor="sel1">State</label>
                    <select className="form-control" id="sel1">
                        <option>Ind</option>
                        <option>US</option>
                        <option>China</option>
                        <option>Japan</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sel1">Work Experience</label>
                    <select className="form-control" id="sel1">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div>
                    <label>Employer</label>
                    <input type="text"  id="usr"/>
                </div>
                <div>
                    <label>Job Title</label>
                    <input type="text"  id="usr"/>
                </div>
                <div>
                    <label htmlFor="sel1">Start Year</label>
                    <select className="form-control" id="sel1">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sel1">Start Year</label>
                    <select className="form-control" id="sel1">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>ss
                <div>
                    <label>End Month</label>
                    <input type="text"  id="usr"/>
                </div>
                <div>
                    <label>End Year</label>
                    <input type="text"  id="usr"/>
                </div>
                <div>
                    <label>Responbilities</label>
                    <input type="text"  id="usr"/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary"><b>Additional Information</b></button>
                </div>
                <div>
                    <label>Country</label>
                    <input type="text"  id="usr"/>
                </div>
                <div>
                    <label>Education</label>
                    <input type="text"  id="usr"/>
                </div>
                <div>
                    <label>Degree Status</label>
                    <input type="text"  id="usr"/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary"><b>Additional Information</b></button>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary"><b>Save As Draft</b></button>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary"><b>Submit</b></button>
                </div>

            </form>

        );
    }
}
export default Resume;