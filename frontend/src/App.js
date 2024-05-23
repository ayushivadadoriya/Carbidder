import './App.css';
import Footer from "./components/Footer/footer.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Navbar from './components/navbar/navbar';
import About from './components/About/about.jsx';
import Contact from './components/Contact/contact.jsx';
import SignUp from './components/authentication/Signup.jsx';
import Login from './components/authentication/Login.jsx';
import Addauction from './components/Auction/addauctionform.jsx';
import Auction from './components/Auction/auction.jsx';
import Cardetails from './components/cardetails/cardetails.jsx';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/auction" element={<Auction />}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/addauction" element={<Addauction />}></Route>
          <Route path="/cardetails" element={<Cardetails />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;