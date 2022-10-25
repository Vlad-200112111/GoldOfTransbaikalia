import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Components/Pages/Home/Home";
import Licenses from "../../Components/Pages/Licenses/Licenses";
import Publications from "../../Components/Pages/Publications/Publications";
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
        path="/licenses"
        element={
          <GuestRoute>
            <Licenses />
          </GuestRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
