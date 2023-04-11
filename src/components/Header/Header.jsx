import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import{useState} from "react";
import {useEffect} from "react";

const Header = () => {


  const [category,setCategory]=useState([]);

   useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
    .then(res => {
        console.log(res.data);
       
        const unique = [...new Set(res.data.map(item => item.category))];
        setCategory(unique);

    })
    .catch((error)=>{
        console.log(error);
         })
},[])
console.log(category);

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
            
            <ul className="navbar-nav mr-auto links">
            <li className="nav-item"><a href="brands">Shop</a></li>

              <li className="nav-item dropdown">
            <div class="collapse navbar-collapse type" id="navbarNavDarkDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                  </a>   
                 
                  <ul class="dropdown-menu dropdown-menu-grey" aria-labelledby="navbarDarkDropdownMenuLink">
              
                      {category.map((item, i)=>(
                        <li key={i}><a class="dropdown-item" href="#">{item}</a></li>
                      ))}
                     
                    {/* <li><a class="dropdown-item" href="#">Formal collection</a></li>
                    <li><a class="dropdown-item" href="#">Rare Collection</a></li> */}
                  </ul>
                  
                </li>
              </ul>
            </div>

              </li>

              <li className="nav-item"><Link to="/most wanted">Most wanted</Link></li>

              <li className="nav-item"><Link to="/productpage">New arrival</Link></li>
              
              <li className="nav-item"><a href="brands">Brands</a></li>

            </ul>
        </div>
        <div className="search-box">

          <form class="form-inline my-2 my-lg-0">
            <input type="text" name="search" maxlength="60" placeholder="Search..." required/>
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>

        </div>
        
        <div className="collapse navbar-collapse toggle-btn cart" id="navbarNavDarkDropdown">
        <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-shopping-cart icons" aria-hidden="true"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-grey" aria-labelledby="navbarDarkDropdownMenuLink">
              
              <li><a class="dropdown-item" href="#">My Orders</a></li>
              <li><a class="dropdown-item" href="#">Recent View</a></li>
              <li><a class="dropdown-item" href="#">Edit Cart</a></li>
              <li><a class="dropdown-item" href="#">Tracking My order</a></li>
              <li><a class="dropdown-item" href="#">Payment & Support</a></li>
            </ul>
            
          </li>
        </ul>
     
          {/* <i className="fa fa-shopping-cart icons" aria-hidden="true"></i> */}
        </div>
                 
             <div class="collapse navbar-collapse toggle-btn cart" id="navbarNavDarkDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-user icons" aria-hidden="true"></i>
                  </a>   
                 
                  <ul class="dropdown-menu dropdown-menu-grey" aria-labelledby="navbarDarkDropdownMenuLink">
              
                    <li><a class="dropdown-item" href="#">Account</a></li>
                    <li><a class="dropdown-item" href="#">Edit Profile</a></li>
                    <li><a class="dropdown-item" href="#">Settings & Privacy</a></li>
                    <li><a class="dropdown-item" href="#">Help & Support</a></li>
                    <li><a class="dropdown-item" href="#">Logout</a></li>
                  </ul>
                  
                </li>
              </ul>
            </div>
      </nav>
    </div>
  </header>  
  </>

)};

export default Header;
