import logo from "./logo.png";
import "./Leftside.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Leftside() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/");
  };

  return (
    <div class="topleft">
      <div class="top">
        <div class="form">
          <div>
            <input class="search" type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <aside class="leftside">
        <div>
          <div class="logo">
            <img src={logo} alt="Logo" />
            <h2>Slot Portal</h2>
          </div>
          <div>
            <h3>Dashboard</h3>
          </div>
          <div>
            <a href="dashmain.html">
              <button class="btnnow">DASHBOARD</button>
            </a>
          </div>
          <div>
            <h3>Course Action</h3>
          </div>
          <div>
            <a href="acourse.html">
              <button class="btn">AVAILABLE COURSES</button>
            </a>
          </div>
          <div>
            <a href="mycourse.html">
              <button class="btn">MY COURSES</button>
            </a>
          </div>
        </div>
        <div>
          <a href="ecourse.html">
            <button class="btn">ELIGIBLE COURSES</button>
          </a>
        </div>
        <div>
          <div>
            <h3>Others</h3>
          </div>
          <div>
            <button class="btn" type="button" onClick={handleSignIn}>
              SIGN OUT
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Leftside;
