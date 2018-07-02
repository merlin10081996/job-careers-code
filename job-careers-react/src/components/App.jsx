import React from 'react';
import {Component} from 'react';
import './login.css';
import vzLogo from './images/vz.png';


class App extends Component {
    render() {
        return (




            <form>


               <div className="form-group">
                   <img src={vzLogo} width={100} height={5} alt="..." className="img-thumbnail" /></div>

                   <div>
               <button type="submit" className="btn btn-primary"><b>About Us</b></button>
                   <button type="submit" className="btn btn-primary"><b>Careers</b></button>
               </div>
            </form>

        );
    }
}
export default App;