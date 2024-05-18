"use client";
import React from "react";

const Nav = () => {
  function Scrollering(txt) {
    function MoveTo(top) {
      window.scroll({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    }
    if (txt === "home") MoveTo(0);

    if (window.screen.width >= 1355) {
      if (txt === "Sevies") MoveTo(600);
      else if (txt === "Skills") MoveTo(1200);
      else if (txt === "Projects") MoveTo(1800);
      else if (txt === "About My") MoveTo(2400);
    }
     else if (window.screen.width >= 768 && window.screen.width < 991) {
      if (txt === "Sevies") MoveTo(1000);
      else if (txt === "Skills") MoveTo(2300);
      else if (txt === "Projects") MoveTo(3200);
      else if (txt === "About My") MoveTo(100000);
    }
  }

  return (
    <div id="NavBar">
      <h1>
        Protfo<span>lio</span>
      </h1>
      <div id="div_Btn_Nav">
        <button onClick={() => Scrollering("home")} className="btn_Nav">
          Home
        </button>
        <button onClick={() => Scrollering("Sevies")} className="btn_Nav">
          Sevies
        </button>
        <button onClick={() => Scrollering("Skills")} className="btn_Nav">
          Skills
        </button>
        <button onClick={() => Scrollering("Projects")} className="btn_Nav">
          Projects
        </button>
        <button onClick={() => Scrollering("About My")} className="btn_Nav">
          About My
        </button>
      </div>
    </div>
  );
};

export default Nav;
