import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/** Layout */
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Home from "./pages/home/Home";
/** Pages */
import CreatorProfile from "./pages/creator-profile/CreatorProfile";
import CreatorView from "./pages/creator-view/CreatorView";
import CreatorDiscover from "./pages/creator-discover/CreatorDiscover";

import Dashboard from "./pages/dashboard/Analytics";
import CreatorDashboard from "./pages/dashboard/CreatorDashboard";
import UserDashboard from "./pages/dashboard/UserDashboard";

function Routing() {
  return (
    <>
      <BrowserRouter>
      
        <Header />
        <Routes  path="/analytics/dashboard" to="/analytics/dashboard/creator" >
        <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/creator/profile" element={<CreatorProfile />} />
          <Route exact path="/creator/view" element={<CreatorView />} />
          <Route exact path="/creator/discover" element={<CreatorDiscover />} />
          <Route  path="/analytics/dashboard"  element={<Dashboard />}>
            <Route  path="/analytics/dashboard/creator" element={<CreatorDashboard />} />
            <Route  path="/analytics/dashboard/user" element={<UserDashboard />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routing;
