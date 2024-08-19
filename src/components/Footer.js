import React from "react";
import { Link } from "react-router-dom";
import footerlogo from '../assets/images/Indian-Railways.png'

const Footer = () => {
    return(
        <div id="footer" className="flex justify-between flex-wrap gap-16 items-center" >
            <div id="footer-left" className="flex gap-3 items-center flex-wrap">
                <Link to="https://www.zairza.co.in/">
                <img src={footerlogo} className="w-11" alt="navbarlogo" />
                </Link>
                <div id="footer-text" className="text-justify">This is an official grievance redressal mechanism of Indian Railways, designed to streamline the process of lodging and tracking complaints related to train services.
                </div>
            </div>
            <div id="footer-right">
                <ul className="flex gap-6 pl-0">
                    <li>
                        <a href="/" target="_blank" rel="noopener noreferrer" className=" text-slate-200 font-led ">User Manual</a>
                        </li>
                    <li>
                        <a href="/" target="_blank" rel="noopener noreferrer" className="text-slate-200 font-led ">Railway Admin Login </a>
                        </li>
                    <li>
                        <a href="/" target="_blank" rel="noopener noreferrer" className="text-slate-200 font-led ">MIS Report Login</a>
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer