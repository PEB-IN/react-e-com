import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [showsearch, setShowsearch] = useState(false);
  window.addEventListener("scroll", function () {
    var header1 = document.querySelector(".header1");
    header1.classList.toggle("sticky", window.scrollY > 0);
  });

  // Header top Alert

  const [closearo, setClosearo] = useState(true);

  function closing() {
    setClosearo(false);
  }
  // Search Box

  const [searchdata, setSearchData] = useState([]);

  // const [valu, setValu] = useState("");
  // const data = ["Global", "World", "Internet", "four", "five", "six", "seven"];

  function google(e) {
    if (e.target.value == 0) {
      setShowsearch(false);
    } else {
      // https://demo.dataverse.org/api/search?q=e.target.value
      axios
        .get(`https://demo.dataverse.org/api/search?q=${e.target.value}`)
        .then((res) => setSearchData(res.data.data?.items))
        .catch((error) => console.log(error));
      setShowsearch(true);
    }
  }
  const empty = (e) => {
    console.log("her");
    setShowsearch(false);
  };

  // Cart

  function removefil() {
    document.getElementById("filterdiv").classList.remove("open");
    document.body.classList.remove("lock-scroll");
  }

  function OpenOrClose() {
    document.getElementById("filterdiv").classList.toggle("open");
    document.body.classList.toggle("lock-scroll");
  }

  // Store API

  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        const unique = [...new Set(res.data.map((item) => item.category))];
        setCategory(unique);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {closearo && (
        <header className="box">
          <div className="container">
            <div className="top">
              <div>
                <marquee>
                  <p className="mb-0">
                    Signup and GET 20% OFF for your first order :{" "}
                    <a href="signup"> Signup now</a>
                  </p>
                </marquee>
                <button onClick={closing}>
                  <i className="fa fa-times close" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </header>
      )}

      <header className="header1">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-fixed-top greetheader">
            <div className="logo">
              <a href="/">NOSTRA</a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto links">
                <li className="nav-item">
                  <a href="brands">Shop</a>
                </li>

                <li className="nav-item dropdown">
                  <div
                    className="collapse navbar-collapse type"
                    id="navbarNavDarkDropdown"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDarkDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Category
                        </a>

                        <ul
                          className="dropdown-menu dropdown-menu-grey"
                          aria-labelledby="navbarDarkDropdownMenuLink"
                        >
                          {category.map((item, i) => (
                            <li key={i}>
                              <a className="dropdown-item" href="#">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <Link to="/most wanted">Most wanted</Link>
                </li>

                <li className="nav-item">
                  <Link to="/productpage">New arrival</Link>
                </li>

                <li className="nav-item">
                  <a href="brands">Brands</a>
                </li>
              </ul>
            </div>

            <div className="search-box" id="searchBox">
              <form className="form-inline my-2 my-lg-0">
                <input
                  id="inputBtn"
                  type="text"
                  name="search"
                  maxLength="60"
                  placeholder="Search..."
                  required
                  autoComplete="off"
                  onChange={google}
                />

                <button type="submit">
                  <i className="fa fa-search searchIcon"></i>
                </button>
                {/* {true && } */}
                {showsearch && (
                  <div id="data" className="searchengine">
                    {searchdata.map((item, i) => (
                      <option onClick={empty}>{item.name}</option>
                    ))}
                  </div>
                )}
              </form>
            </div>

            <div
              className="collapse navbar-collapse toggle-btn cart"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i
                      className="fa fa-shopping-cart icons"
                      onClick={OpenOrClose}
                      aria-hidden="true"
                    >
                      <span className="badge badge-light cart_badge gead">
                        0
                      </span>
                    </i>
                  </a>

                  {/* sliding cart */}

                  <div id="filterdiv">
                    <div className="filtersidebar" onClick={removefil}></div>

                    <div className="filterdiv_inner">
                      <form className="filterform">
                        <p className="closeKey" onClick={removefil}>
                          {" "}
                          &times;
                        </p>
                        <a className="cart-content" href="#">
                          My orders
                        </a>
                        <a className="cart-content" href="#">
                          Recent View
                        </a>
                        <a className="cart-content" href="#">
                          Edit Cart
                        </a>
                        <a className="cart-content" href="#">
                          Tracking My order
                        </a>
                        <a className="cart-content" href="#">
                          Payment & Support
                        </a>
                      </form>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div
              className="collapse navbar-collapse toggle-btn cart"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-user icons" aria-hidden="true"></i>
                  </a>

                  <ul
                    className="dropdown-menu dropdown-menu-grey"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Account
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Edit Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings & Privacy
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Help & Support
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
