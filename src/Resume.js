import './Resume.css'
import figma from './assets/figma.png'
import xd from './assets/xd.png'
import Ai from './assets/illustrator.png'
import ps from './assets/photoshop-express.png'
import arrow from './assets/arrow1.png'

import contact from './assets/contact-book.png'
import mail from './assets/email.png'
import location from './assets/placeholder.png'
function Top(){
return(
    <div className='top-container'>
        <div className='top-ui'>
        <h2>NANDANA AJITH</h2>
        <h3 style={{color:'rgb(65 61 61 / 79%)', justifySelf:'start'}}>UI/UX Designer</h3>
        </div>
        <div className='top-logos'>
            <img className='logo' src={contact}/>
            <img src={mail} className='logo'/>
            <img src={location} className='logo'/>
        </div>
        <div className='top-details'>
        <p style={{fontSize:'20px'}}>9400621790</p>
        <a href='mailto:nandanaajith312@gmail.com'>nandanaajith312@gmail.com</a>
        <h4 style={{paddingTop:'5px'}}>TRIVANDRUM, KERALA</h4>
        </div>
    </div>
);


}
function Objective(){
return(
    <div className='objective-container'>
    <h3>Objective</h3>
    <div className='objective-content'>
    <p>“An aspiring UI designer, currently pursuing graduation in electronics and 
    <br/> communication engineering. Passion is to create user friendly <br/>
   projects. Confident that I can portray my skills and abilities through my work.”</p>
    </div>
    </div>
);
}
function Skill (){
return (
    <div className='Skills-container'>
        <h3 style={{textAlign:'center'}}>Skills</h3>
        <ul className='skills-list'>
        <li>UI/UX design</li>
        <li>Prototyping</li>
        <li>Wireframing</li>
        <li>Design thinking</li>
        <li>Interaction Design</li>
        <li>Basic coding  [HTML,CSS]</li>
        </ul> 
    </div>
);
}
function Tool(){
return(
    <div>
        <h3 style={{textAlign:'center'}}>Tools</h3>
        <div style={{paddingTop:'20px'}} className='Tool-icons'>

       <img src={figma} />
       <img src={xd} />
       <img src={ps} />
       <img src={Ai}/>
        </div>
    </div>
);

    
}
function Education(){
return (
    <div>
    <h3 style={{textAlign:'center'}}>Education</h3>
    <div className='Education-container'>

    <img src={arrow} className='Education-img'/>
    <div>
    <p style={{paddingTop:'25px'}}>CLASS 10<br/>(2016-2017) </p>
    <p>ARYA CENTRAL SCHOOL</p>
    <ul>
        <li>Board of exam : CBSE</li>
        <li>Marks scored  : 9.2 CGPA</li>
    </ul>
    <p  style={{paddingTop:'5px'}}>CLASS 12<br/>(2019-2023)</p>
    <p>ARYA CENTRAL SCHOOL</p>
    <ul>
        <li>Board of exam : CBSE</li>
        <li> Marks scored  : 75% </li>

    </ul>
    <p style={{paddingTop:'30px'}}>BTech<br/>(2019-2023)</p>
    <p>UNIVERSITY COLLEGE OF ENGINEERING KARIAVATTOM</p>
    <p>ELECTRONICS AND COMMUNICATION</p>
    <ul>
        <li>Currently Pursuing</li>
    </ul>

    </div>
    </div>
    </div>

);
}
export default function Resume(){
    return (
        <div className='Container'>
            <Top/>
            <Objective/>
            <Skill/>
            <Tool/>
            <Education/>
        </div>
    );
}