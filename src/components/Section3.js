import React from 'react'
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import img1 from "../assets/images/navbar-logo.png";
import { GrMenu } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useState,useEffect } from 'react';
const Section3 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const checkScrollTop = () => {
      if (document.documentElement.scrollTop > 50) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("scroll", checkScrollTop);

    return () => {
      document.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  const handleNavigation = (section) => {
    navigate("/", { state: { section } });
  };

  const handleLogout = () => {
    // console.log("Logging out");
    localStorage.removeItem("authToken");
    navigate("/signin");
  };
  return (
    <div> <div className="w-full relative z-50">
    <nav
      className="h-20 bg-white rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md  mx-[9vw] my-[3vmax] max-w-[400px]:mx-[1vw] custom-mx"
      id="navbar"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-around nav-mob mx-auto p-3">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
        >
        
        </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse nav-reg">
        

          {location.pathname.includes("/profile") && (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4 flex items-center gap-1"
            >
              Logout <BiLogOut className="text-lg" />
            </button>
          )}
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-12 h-12 justify-center text-6xl text-white rounded-lg md:hidden"
          aria-controls="navbar-cta"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <GrMenu />
        </button>

        <div
          className={` justify-between ${
            isMenuOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col  text-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
           

<select id="countries" class="bg-gray-50 font-Aeo   rounded-lg  block w-full p-2.5  text-black ">

  <option selected>Choose Grievance Type</option>

  <option value="US">United States</option>

  <option value="CA">Canada</option>

  <option value="FR">France</option>
 
  <option value="DE">Germany</option>

</select>
            </li>
            
            <li>
            <select id="places" class="bg-gray-50 font-Aeo  rounded-lg  block w-full p-2.5  text-black ">

  <option selected>Train/Platform</option>

  <option value="US">Train</option>

  <option value="CA">Platform</option>


</select>
            </li>
            <li>
              <input placeholder='Enter PNR' type='number' className='p-2.5 placeholder:text-slate-600'/>
            </li>
            <li>
            <input placeholder='Notes'  className='p-2.5 text-black placeholder:text-slate-600'/>
            </li>
            <li>
             </li>
          </ul>
        </div>
      </div>
    </nav>
  </div></div>
  )
}

export default Section3