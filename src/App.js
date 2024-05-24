import logo from './logo.png';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/Login';
// import LeftSide from './Topside/Leftside';
import Box from './Dashboard/Dash';
import Bpage from './bookc/Bookc';
import Python from './bookpy/bookpy';
import Register from './register/Register';
// import GoogleAuth from './Login/Google';


function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path='/register' element={<Register/>}/>
                    <Route path="Dashboard" element={<Box/>}></Route>
                    <Route path="bookc" element={<Bpage/>}></Route>
                    <Route path="bookpy" element={<Python/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

