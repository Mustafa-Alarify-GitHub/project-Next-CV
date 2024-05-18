import MyName from "./Compontes/MyName";
import MySochial from "./Compontes/MySochial";
import Nav from "./Compontes/Nav";
import Project from "./Compontes/Project";
import Servies from "./Compontes/Servies";
import Skills from "./Compontes/Skills";
import SnakeBar from "./Compontes/SnakeBar";

export default function Home() {
  return (
   <div>
      <Nav/>
      <MyName/>
      <Servies/>
      <Skills/>
      <SnakeBar/>
      <Project/>
      <MySochial/>
    </div>
  );
}
