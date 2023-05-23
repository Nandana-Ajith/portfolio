import Front  from './Frontpage';
import './App.css';
import Resume from './Resume'
import background from './assets/download.png'
import { Routes,Route, Link } from 'react-router-dom';


export default function App() {
  const style = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  return (
  <div className='container' style={style}>
    <Routes>
     <Route path='/' element={<Front/>}/>
    <Route path='/resume' element={<Resume/>}/>
      </Routes>

    {/* <Frontpage/>
  <Aboutpage/>
  <Mydesignworks/>
  <Contact/> */}
 
 
  </div >
  );
}


