/* eslint-disable */
import React, { Component } from 'react';

import logo from '../assets/logo.png';

class Navigation extends Component {
  render() {
    return (
      <header className="header-1 region-0 block-0">
        <div className="container">
          <div className="row">

            <div id="logo-region" className="logo col-xs-12 col-md-3 text-center-sm">
              <a href="/"><img src={logo} alt="Home" className="logo" /></a>
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
                          <li className="active"><a href="/" title="" className="active">Home</a></li>
                          <li><a href="/whoweare" title="">Who We Are</a></li>
                          <li><a href="/whatwedo" title="">What We Do</a></li>
                          <li><a href="/visitus" title="">Visit us @ 10am Sundays</a></li>
                          <li><a href="/resources" title="">Resources</a></li>
                          <li><a href="/partnership" title="">Partnership</a></li></ul>
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
                            <a href="/whoweare" >Who We Are</a>
                          </li>
                          <li className="tb-megamenu-item level-1 mega">
                            <a href="/whatwedo" >What We Do</a>
                          </li>

                          <li className="tb-megamenu-item level-1 mega">
                            <a href="/visitus" >Visit Us</a>
                          </li>

                          <li className="tb-megamenu-item level-1 mega">
                            <a href="/resources" >Resources</a>
                          </li>

                          <li className="tb-megamenu-item level-1 mega">
                            <a href="/partnership">Partnership</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>  </div>
            </div> {/* /menu-region */}

          </div> {/* /row */}
        </div> {/* /container */}
      </header>
    );
  }
}

export default Navigation;
