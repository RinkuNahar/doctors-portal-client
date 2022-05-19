import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Navbar from './Shared/Navbar/Navbar';
import Reviews from './Pages/Reviews/Reviews'
import Contact from './Pages/Contact/Contact';
import Login from './Firebase/Login/Login';
import Footer from './Shared/Footer/Footer';
import SignUp from './Firebase/SignUp/SignUp';
import RequireAuth from './Shared/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from '../src/Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import User from './Pages/Dashboard/User';
import RequireAdmin from './Firebase/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';

function App() {
  return (
    <div >
      <Navbar></Navbar>

      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>

          <Route path='users' element={<RequireAdmin>
            <User></User>
          </RequireAdmin>}>
          </Route>

          <Route path='addDoctor' element={<RequireAdmin>
            <AddDoctor></AddDoctor>
          </RequireAdmin>}>
          </Route>

        </Route>

        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
