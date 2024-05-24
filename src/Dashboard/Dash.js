import './Dash.css';
import React from 'react';
import Bpage from '../bookc/Bookc';
import Leftside from '../Topside/Leftside';
import { useLocation} from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';

function Box() {

  
    const navigate=useNavigate();
    const location=useLocation();
    const user = location.state?.userData;
    console.log(user);



    const handleSignIn = () => {
        navigate('/bookc');
      };

    const handle = () => {
        navigate('/bookpy');
      };
    return (
        <div >
            <Leftside />
            <div className="dmain">
            
                <div className='ongoing' ><h3>ON GOING COURSE</h3></div>
            
            <div className='flexcon1'>
            <div class="pc">
                <div class="c"> 
                <button class="gbtn" type="button" onClick={handleSignIn}>C PROGRAMMING</button>
            </div>
                {/* <button className='cp' onclick={handleSignIn}>C PROGRAMMING</button> */}
                
            </div>
            <div class="pc">
                <a><div class="py">
                    {/* <p className='cp'  onclick={handleSignIn} >PYTHON PROGRAMMING</p> */}
                    <button class="gbtn" type="button" onClick={handle}>PYTHON PROGRAMMING</button>
                </div></a>
                
            </div>
            </div>
            <div ><h3>ALL COURSES</h3></div>
            
            <div className='flexcon'>
            <div class="pc">
                <a  onclick="display()"><div class="c" ><p className='cp'>C PROGRAMMING</p></div> </a>
                
            </div>
            <div class="pc">
                <a   onclick="display()"><div class="py"><p className='cp'>PYTHON PROGRAMMING</p></div></a>
                
            </div>
            <div class="pc">
                <a   onclick="display()"><div class="ja"><p className='cp'>JAVA PROGRAMMING</p></div></a>
                
            </div>
            </div>
        </div>
        </div>


    );
}
export default Box