import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Components/Pages/Home/Home";
import Licenses from "../../Components/Pages/Licenses/Licenses";
import Map from "../../Components/Pages/Map/Map";
import PublicationDetails from "../../Components/Pages/PublicationDetails/PublicationDetails";
import Publications from "../../Components/Pages/Publications/Publications";
import Statistics from "../../Components/Pages/Statistics/Statistics";
import GuestRoute from "../Components/GuestRoute/GuestRoute";
function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <GuestRoute>
            <Home />
          </GuestRoute>
        }
      />
      <Route
        path="/publications"
        element={
          <GuestRoute>
            <Publications />
          </GuestRoute>
        }
      />
      <Route
        path="/publication-details/:id"
        element={
          <GuestRoute>
            <PublicationDetails />
          </GuestRoute>
        }
      />
      <Route
        path="/licenses"
        element={
          <GuestRoute>
            <Licenses />
          </GuestRoute>
        }
      />
      <Route
        path="/statistics"
        element={
          <GuestRoute>
            <Statistics />
          </GuestRoute>
        }
      />
      <Route
        path="/map"
        element={
          <GuestRoute>
            <Map />
          </GuestRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
