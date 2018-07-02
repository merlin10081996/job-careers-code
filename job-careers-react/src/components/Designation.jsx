import React from 'react';
import {Component} from 'react';
import './login.css';
import vzLogo from './images/vz.png';


class Designation extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <img src={vzLogo} width={100} height={5} alt="..." className="img-thumbnail" /></div>

                <div>
                    <table cellspacing="100" className="table">
                        <thead>
                        <tr>
                            <th scope="col">Designation</th>
                            <th scope="col">Location</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td><a className="nav-link" href="#">Associate Member Tech Staff</a></td>
                            <td>Chennai</td>
                        </tr>
                        <tr>
                            <td><a className="nav-link" href="#">Software Engineer</a></td>
                            <td>Hyberabad</td>
                        </tr>
                        <tr>
                            <td><a className="nav-link" href="#">Analyst</a></td>
                            <td>Bangalore</td>
                        </tr>
                        <tr>
                            <td><a className="nav-link" href="#">Specialist</a></td>
                            <td>United States</td>
                        </tr>
                        </tbody>
                    </table>


                                   </div>
            </form>

        );
    }
}
export default Designation;