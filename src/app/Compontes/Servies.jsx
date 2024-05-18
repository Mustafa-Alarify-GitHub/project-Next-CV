import { dataServies } from "@/Data_Servies";
import Image from "next/image";
import React from "react";

const Servies = () => {

const ShowData=dataServies.map((e)=>{
  return(
    <div key={e.titel} className="OneServies">
        <Image id="img_servies_size" src={e.src} alt="ss" width={130} height={130}/>
        <h2>{e.titel}</h2>
        <h6>{e.p}</h6>
    </div>
  )
});
  return (
    <div id="div_Servies">
      <div id="img_servies">
        <Image src="/ser.png" width={400} height={400} alt="errr" />
      </div>
      <div id="div_servie">
            {ShowData}
      </div>
    </div>
  );
};

export default Servies;
