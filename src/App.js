import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Experts from './Pages/Home/Experts/Experts';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service/:serviceID' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/experts' element={<Experts></Experts>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
