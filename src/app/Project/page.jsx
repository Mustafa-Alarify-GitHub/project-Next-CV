"use client";
import Image from "next/image";
import "./style_project.css";
import { data_project } from "./Data_project";

const page = (props) => {
  console.log(data_project[props.searchParams.number]);
  return (
    <div id="div_one_project">
      <h1>{data_project[props.searchParams.number].title}</h1>
      {data_project[props.searchParams.number].img.map((e, index) => {
        return (
          <Image
            key={index}
            src={`/pr/${props.searchParams.number}/${e}`}
            width={
              window.screen.width > 992
                ? 850
                : window.screen.width > 768 && window.screen.width < 991
                ? 600
                : 330
            }
            height={
              window.screen.width > 992
                ? 550
                : window.screen.width > 768 && window.screen.width < 991
                ? 350
                : 200
            }
            alt="lodding"
            priority
          />
        );
      })}
      <p>{data_project[props.searchParams.number].dec}</p>
      <a href={data_project[props.searchParams.number].url} target="_blank">
        Link GitHub
      </a>
    </div>
  );
};

export default page;
