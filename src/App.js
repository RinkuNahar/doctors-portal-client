import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Navbar from './Shared/Navbar/Navbar';
import Reviews from './Pages/Reviews/Reviews'
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
     </Routes>
    </div>
  );
}

export default App;
