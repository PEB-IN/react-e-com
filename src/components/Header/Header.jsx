import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return( 
    <>
    <header className="box">
      <div className="container">
        <div className="top">
          <div>
            <p className="mb-0">Signup and GET 20% OFF for your first order : <a href="signup"> Signup now</a></p>
            <i className="fa fa-times close" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </header>
  <header>
    <div className="container">

      <nav className="navbar navbar-expand-lg navbar-fixed-top">

        <div  className="logo"><a href="#">NOSTRA</a></div>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
        < ul className="navbar-nav mr-auto links">

          <li className="nav-item dropdown">
              <div className="dropdown">
                <button className="dropbtn">Shop 
                  <i className="fa fa-caret-down"></i>
                </button>
              </div> 

          </li>

          <li className="nav-item"><a href="most wanted">Most wanted</a></li>

          <li className="nav-item"><a href="new arrival">New arrival</a></li>
          
          <li className="nav-item"><a href="brands">Brands</a></li>

        </ul>
        </div>
        <div className=""><input type="text" placeholder="Search.."></input></div>
        
        <div className="cart">
          <i className="fa fa-shopping-cart icons" aria-hidden="true"></i>
          <i className="fa fa-user icons" aria-hidden="true"></i>
        </div>
        <div className="toggle-btn">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </nav>
    </div>
  </header>  
  </>

)};

export default Header;
