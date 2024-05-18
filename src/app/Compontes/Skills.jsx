import React from 'react'
import { DataSkills } from '../DataSkills'
import Image from 'next/image';

const Skills = () => {
    const sizeIcon=70;
    function ShoeData(src) { return <div className='imgSkill'><Image src={src} alt='erroe' width={sizeIcon}height={sizeIcon}/></div>}
  return (
    <div id='div_skills'>
        <div id="img_Skill">
            <Image id='img_Skill_co' src='/sk.png' alt='ssss' width={550} height={550}/>
        </div>
        <div id="Skills">
            <h1>My <span>Skills</span></h1>
            <div id='Center_skills'>
                <div id="Row_Skills">
                {ShoeData(DataSkills[0])}
                {ShoeData(DataSkills[1])}
                {ShoeData(DataSkills[2])}
                {ShoeData(DataSkills[3])}
                {ShoeData(DataSkills[4])}
                </div>
                <div id="Row_Skills">
                {ShoeData(DataSkills[5])}
                {ShoeData(DataSkills[6])}
                {ShoeData(DataSkills[7])}
                {ShoeData(DataSkills[8])}
                {ShoeData(DataSkills[15])} 
                
                </div>
                <div id="Row_Skills">
                {ShoeData(DataSkills[10])}
                {ShoeData(DataSkills[11])}
                {ShoeData(DataSkills[12])}
                {ShoeData(DataSkills[13])}
                {ShoeData(DataSkills[14])}
                </div>



                <div id='Mobile_Skills'>
                {ShoeData(DataSkills[0])}
                {ShoeData(DataSkills[1])}
                {ShoeData(DataSkills[2])}
                </div>
                <div id='Mobile_Skills'>
                {ShoeData(DataSkills[3])}
                {ShoeData(DataSkills[4])}
                {ShoeData(DataSkills[5])}
                </div>
                <div id='Mobile_Skills'>
                {ShoeData(DataSkills[6])}
                {ShoeData(DataSkills[7])}
                {ShoeData(DataSkills[8])}
                </div>
                <div id='Mobile_Skills'>
                {ShoeData(DataSkills[15])}
                {ShoeData(DataSkills[10])}
                {ShoeData(DataSkills[11])}
                </div>
                <div id='Mobile_Skills'>
                {ShoeData(DataSkills[12])}
                {ShoeData(DataSkills[13])}
                {ShoeData(DataSkills[14])}
                </div>
           
            </div>
        </div>
        
    </div>
  )
}

export default Skills
