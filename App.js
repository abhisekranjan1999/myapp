// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Home from './components/Home';
// import ClassComponent from './ClassComponent';
// import FuncComp,{SubFuncComp} from './components/FuncComp';
// import Resume from './Resume';
import About from './components/About';
import WorkIntern from './components/WorkIntern';
import EducCertif from './components/EducCertif';
import Home from './components/Home';
import NavBar from './components/NavBar';
function App() {
  // var myStyle = {n
  //   "background-color": "aqua",
  //   "text-align": "center"

  // }
  return (
    <>
<BrowserRouter>
      <Routes>
        <Route path="/" element={< NavBar/>}>
        <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="blogs" element={<WorkIntern />} />
          <Route path="contact" element={<EducCertif />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

    
   
    {/* <Home/>
    <ClassComponent/>
      <h1 style={myStyle}>WELCOME TO MY WEBSITE</h1>
      <hr />
      <fieldset>
        <legend>CONTENT</legend>
        <a href="#about">ABOUT ME:</a>
        <br />
        <a href="#image">MY IMAGE:</a>
      </fieldset>

      <h2 id='#about'>ABOUT ME:</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos provident quia eos eveniet nulla suscipit, ullam neque. Doloremque, qui maxime dolorem itaque aperiam earum illum alias veritatis est rerum accusamus.</p>

      <h2>MY IMAGE:</h2>
      <img src="https://images.pexels.com/photos/1883385/pexels-photo-1883385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" height="200px" width="200px" />
   <FuncComp/>
   <SubFuncComp/> */}

   {/* <NavBar/> */}
   {/* <Resume/> */}
   
   </>
  );
}
export default App;


