/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import logo from '../assets/logo.png';
import logo from '../assets/bpc_logo.svg';

class Navigation extends Component {
  render() {
    return (
      <header className="header-1 region-0 block-0">
        <div className="container">
          <div className="row">

            <div id="logo-region" className="logo col-xs-12 col-md-3 text-center-sm">
              <Link to="/"><img src={logo} alt="Home" className="logo" /></Link>
            </div> {/* /logo-region */}

            <div id="menu-region" className="col-xs-12 col-md-9">
              <div className="region region-header">

                <div className="block block-menu hidden-md hidden-lg">


                  <div className="content">

                    <nav className="navbar nestor-main-menu" role="navigation">
                      {/* Menu button for mobile display */}
                      <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">MENU</button>
                      </div>

                      {/* Navigation links */}
                      <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav navbar-right">
                          <li className="active"><Link to="/" title="" className="active">Home</Link></li>
                          <li><Link to="/whoweare" title="">Who We Are</Link></li>
                          <li><Link to="/whatwedo" title="">What We Do</Link></li>
                          <li><Link to="/visitus" title="">Visit us @ 10am Sundays</Link></li>
                          <li><Link to="/sermons" title="">Sermons</Link></li>
                          <li><Link to="/resources" title="">Resources</Link></li>
                          <li><Link to="/contact" title="">Contact Us</Link></li></ul>
                      </div> {/* /navbar-collapse */}
                    </nav>
                  </div>
                </div>

                <div className="block block-tb-megamenu">


                  <div className="content">
                    <div className="tb-megamenu tb-megamenu-main-menu">
                      <div className="nav-collapse  always-show">

                        <ul className="tb-megamenu-nav nav level-0 items-5">
                          <li className="tb-megamenu-item level-1 mega">
                            <Link to="/whoweare" >Who We Are</Link>
                          </li>
                          <li className="tb-megamenu-item level-1 mega">
                            <Link to="/whatwedo" >What We Do</Link>
                          </li>

                          <li className="tb-megamenu-item level-1 mega">
                            <Link to="/visitus" >Visit Us</Link>
                          </li>

                          <li className="tb-megamenu-item level-1 mega">
                            <Link to="/sermons" >Sermons</Link>
                          </li>

                          <li className="tb-megamenu-item level-1 mega">
                            <Link to="/resources" >Resources</Link>
                          </li>

                          <li className="tb-megamenu-item level-1 mega">
                            <Link to="/contact">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>  </div>
            </div> {/* /menu-region */}

          </div> {/* /row */}
        </div> {/* /container */}
      </header >
    );
  }
}

export default Navigation;
