import React, { useEffect, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBar from "../views/common/SideBar";

const Protected = ({ Component }) => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  let userData = useSelector((state) => state.LoginReducer);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("data")));
  }, [userData]);
  if (JSON.parse(localStorage.getItem("data")) === null) {
    navigate("/");
  }

  return (
    <>
      {user && user.token !== "" && (
        <div class="wrapper">
          <div class="main-wrap">
            <SideBar />
            <Component />
          </div>
        </div>
      )}
    </>
  );
};

export default Protected;
