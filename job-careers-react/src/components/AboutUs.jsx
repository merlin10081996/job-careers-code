import React from 'react';
import {Component} from 'react';
import './login.css';
import vzLogo from './images/vz.png';
import {
    Route,
    NavLink,
    HashRouter, Link, BrowserRouter, Switch
} from "react-router-dom";
class AboutUs extends Component {
    render() {
        return (
           <div> <b>Helping keep you connected, safer and more secure online.
            That’s TechSure.
            More and more, your life is dependent on technology.
            From online transactions and voice-activated assistants to smart-home products and security monitoring, technology has made everyday living more convenient—but also riskier.
            With so many connected devices, a simple malfunction or hack could lead to more serious problems.
            With Fios, you can get outstanding protection.
            We’ve partnered with some of the top names in the industry—LifeLock, McAfee and others—to bring you products and services you can trust to help monitor,
               protect and support your devices and your family.</b></div>
        );
    }
}
export default AboutUs;