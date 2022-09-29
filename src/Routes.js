// import React, { useContext }  from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.js";
import VolunteerLogging from "./components/Volunteerlogging.js";
import Navigation from './components/Navbar/Navigation.js';
import AllSchools from "./components/AllSchools/AllSchools.js";
import LoginForm from './components/user/LoginForm.js'
import SignupForm from './components/user/SignupForm.js'

import UserProfile from "./components/UserProfile/UserProfile.js";




const RoutesApp = ({login, signup}) => {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/schools' element={<AllSchools />} />

        <Route exact path="/login" element={<LoginForm login={login} />} />
        <Route exact path="/signup" element={<SignupForm signup={signup} />} />
        <Route path='/volunteer' element ={<VolunteerLogging />} />
        <Route path='/user' element={<UserProfile />}></Route>
        {/* <Route path='/volunteer_logging' element={<VolunteerLogging/>} /> */}


        {/* {isLoggedIn
                ? (<> */}
{/*
          <Route exact path="/school/:id">
            <SchoolDetail />
          </Route>

          <Route exact path="/volunteerHours">
            <ApplyVolunteerPage />
          </Route>

          <Route path="/profile">
            <ProfileForm />
          </Route>

          <Route path="/rewards">
            <ProfileForm />
          </Route> */}

          {/* <Redirect to="/" /> */}

          {/* </>) : (<> */}

             {/* <Route path="/" element={<Home />} /> */}
          {/* <Redirect to="/" /> */}
                {/* </>)
            } */}
        </Routes>
    </div>

  );
};

export default RoutesApp;
