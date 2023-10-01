import React, { useState } from "react";
import './NavBar.css';
import SignIn from '../SignIn/SignIn';
import Register from '../Register/Register';

const NavBar = ({ onRouteChange, isSignedIn }) => {
    const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

    const handleProfileButtonClick = () => {
      setProfileDropdownOpen(!isProfileDropdownOpen);
    };
  
    const handleSigninForm = (event) => {
      event.preventDefault();
      // Handle sign-in form submission
    };
  
    const handleRegisterForm = (event) => {
      event.preventDefault();
      // Handle register form submission
    };

    if(!isSignedIn) {
    return (
      <nav className="flex justify-between bg-light-blue pa3">
        <div className="flex items-center">
          {/* <a href="#" className="link white f4">Logo</a> */}
        </div>
        <div className="flex items-center">
          <div className="relative">
            <button id="profile-button" className="bg-transparent bn pointer" onClick={handleProfileButtonClick}>
              <img src="profile-icon.png" alt="Profile Icon" className="w2 h2" />
            </button>
            {isProfileDropdownOpen && (
              <div id="profile-dropdown" className="absolute z-2 bg-white shadow-5 pa2 mt2">
                <form id="signin-form" >
                  <fieldset className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0" onClick={() => onRouteChange('signin')}>Sign In</legend>
                    {/* Sign-in form elements */}
                  </fieldset>
                </form>
                <form id="register-form" >
                  <fieldset className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0" onClick={() => onRouteChange('register')}>Register</legend>
                    {/* Register form elements */}
                  </fieldset>
                </form>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
    }
    else {
      return (
        <nav className="flex justify-between bg-light-blue pa3">
          <div className="flex items-center">
            {/* <a href="#" className="link white f4">Logo</a> */}
          </div>
          <div className="flex items-center">
            <div className="relative">
              <button id="profile-button" className="bg-transparent bn pointer" onClick={handleProfileButtonClick}>
                <img src="profile-icon.png" alt="Profile Icon" className="w2 h2" />
              </button>
              {isProfileDropdownOpen && (
                <div id="profile-dropdown" className="absolute z-2 bg-white shadow-5 pa2 mt2">
                  <form id="signin-form">
                    <fieldset className="ba b--transparent ph0 mh0">
                      <legend className="f4 fw6 ph0 mh0" onClick={() => onRouteChange('update')}>Update Information</legend>
                      {/* Sign-in form elements */}
                    </fieldset>
                  </form>
                  <form id="signin-form">
                    <fieldset className="ba b--transparent ph0 mh0">
                      <legend className="f4 fw6 ph0 mh0" onClick={() => onRouteChange('passwordchange')}>Change Password</legend>
                      {/* Sign-in form elements */}
                    </fieldset>
                  </form>
                  <form id="register-form" onSubmit={handleRegisterForm}>
                    <fieldset className="ba b--transparent ph0 mh0">
                      <legend className="f4 fw6 ph0 mh0">Signout</legend>
                      {/* Register form elements */}
                    </fieldset>
                  </form>
                </div>
              )}
            </div>
          </div>
        </nav>
      );
    }
  }

export default NavBar;