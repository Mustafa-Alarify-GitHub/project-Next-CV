// "use clinet"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  function OneProject(img, description, number) {
    return (
      <Link href={`/Project?number=${number}`} className="div_one_project">
        <Image
          priority
          id="img_project"
          src={img}
          alt=""
          width={360}
          height={150}
        />
        <div id="div_Hover">
          <p>{description}</p>
        </div>
        ;
      </Link>
    );
  }
  return (
    <div id="Div_Project">
      <h1 id="title_project">My project</h1>
      <div id="main_Project">
        <div className="ProjactRow">
          {OneProject(
            "/pr/p1.png",
            "This project Flutter,React-js,Express-js( Api ) and MongooDB",
            0
          )}
          {OneProject(
            "/pr/p2.png",
            "This project Flutter,State Mangement ( GetX ) and Sqlflite ",
            1
          )}
          {OneProject(
            "/pr/p4.png",
            "This project Next js , Express (Api) and MongooDB",
            2
          )}
        </div>
        <div className="ProjactRow">
          {OneProject(
            "/pr/p3.png",
            "This project Flutter (StateManagement GetX), php (Api)",
            3
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
