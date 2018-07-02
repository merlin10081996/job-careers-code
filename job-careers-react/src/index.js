import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Designation from './components/Designation';
import DesignationDetails from './components/DesignationDetails';
import DesignSW from './components/DesignSW';
import DesignAn from './components/DesignAn';
import DesignSp from './components/DesignSp';
import Resume from './components/Resume';


let modals = (
  <div>
      <App />
      <Designation />
      <DesignationDetails/>
      <DesignSW/>
      <DesignAn/>
      <DesignSp/>
      <Resume/>
  </div>
);

ReactDOM.render(modals, document.getElementById('root'));

