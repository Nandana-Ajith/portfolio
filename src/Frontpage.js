import img from './assets/front-img.jpg';
import linkedin from './assets/linkedin.png'
import gmail from './assets/gmail.png'
import behance from './assets/behance.png'
import logo from './assets/potfolio.png'
import './Frontpage.css'
import { Link } from "react-scroll";
function Frontpage(){
  return (
    <div className='Front-page'>
      <img src={logo} className='logo-img'/>
    <img src={img} className="Front-img"/>
    <div className='front-container'>

    <h2 className='Front-heading'>Hello I’m Nandana,
 <br/>a UI/UX Designer.
</h2>
<Link
    activeClass="active"
    to="myDesign"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>
<button className='Front-button' >My Works</button>
</Link>
    </div>
    
    </div>
  )
}


function Aboutpage(){
  return (
    <div className='About-page'>
      <h3 className='About-heading'>About</h3>
      <div className='About-content'>
      <p className='About-p'>
I am an aspiring UI designer, currently pursuing my graduation in ECE.
 My passion is to create user friendly projects.
 I have an intermediate level knowledge in ui/ux designing and in software like Figma and a beginners level of knowledge in Adobe Xd,Ai, Ps etc.
 I am confident that I can portray my skills and passion and abilities through my work.</p>
 <a href='/resume'>
 <button>My Resume</button>
 </a>
      </div>
    </div>
  );
}

function Mydesignworks(){
  return(
    
    <div className='My-design' id='myDesign'>
      <h2 className='design-heading'>My Design Works</h2>
      <div className='design-img'>
      <img src={img}></img>
      <img src={img}></img>
      <img src={img}></img>
      </div>
      <button>View more ></button>
    </div>
  );
}


function Contact(){
  return(
    <div className='Contact'>
    <h2>Thank you Watching</h2>
    <div className='contact-img'>
    <img src ={linkedin} className='Icon'></img>
    <img src={behance} className='Icon'></img>
    <img src={gmail} className='Icon'></img>
    </div>
    </div>
  );
}

export default function Front(){
    return(
        <>
        <Frontpage/>
        <Aboutpage/>
        <Mydesignworks/>
        <Contact/>
        </>
    );
}