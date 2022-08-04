import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Protected from "./protected";
import { authRoutes, routes } from "./Routes";

const AllRoutes = () => {
  return (
    <Routes>
      {authRoutes.map((route, idx) => {
        return route.element ? (
          <Route
            key={idx}
            path={route.path}
            exact={route.exact}
            name={route.name}
            element={<route.element />}
          />
        ) : (
          <Navigate to="/" />
        );
      })}
      {routes.map((route, idx) => {
        return (
          route.element && (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              element={<Protected Component={route.element} />}
            />
          )
        );
      })}
      <Route exact path="/" element={<Navigate to="/" />}></Route>
      {/* <Route exact path="*" element={<Navigate to="/" />}></Route> */}
    </Routes>
  );
};
export default AllRoutes;
