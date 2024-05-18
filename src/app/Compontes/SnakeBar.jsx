import React from "react";

const SnakeBar = () => {
  function SnacK_Bar(Titel, Rang) {
    return (
      <div className="Container_SnakBar">
        <dir className="div_titel_snckbatr">
          <h3>{Titel}</h3>
          <h3>{Rang}</h3>
        </dir>
        <div className="out_snak">
          <div className="in_snak" style={{ width: Rang }}></div>
        </div>
      </div>
    );
  }
  return (
    <div id="SnakBar">
      <div id="SnacksL">
        {SnacK_Bar("Flutter", "90%")}
        {SnacK_Bar("Unreal Engine", "50%")}
        {SnacK_Bar("CSS", "96%")}
        {SnacK_Bar("JavaScript", "93%")}
        {SnacK_Bar("Next js", "80%")}
        {SnacK_Bar("Express js (Api)", "80%")}
      </div>
      <div id="SnacksR">
        {SnacK_Bar("React", "88%")}
        {SnacK_Bar("Html ", "95%")}
        {SnacK_Bar("Unity", "50%")}
        {SnacK_Bar("php", "90%")}
        {SnacK_Bar("Blander", "50%")}
        {SnacK_Bar("Laravel", "90%")}
      </div>
    </div>
  );
};

export default SnakeBar;
