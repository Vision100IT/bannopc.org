import React, { Component } from 'react';
import headerImg from '../../assets/whatwedo.png';

class WhatWeDo extends Component {

  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">

              <img className="img img-responsive" src={headerImg} alt="" />
            </div>
          </div>
        </div>
        <div id="content-region">
          <div className="container">
            <div className="row">
              <div id="main-content-region" className="main-content col-xs-12">
                <div className="region region-content">
                  <div id="block-system-main" className="block block-system">
                    <div className="content">
                      <div className="node node-page clearfix">
                        <div className="content">

                          <ul className="no-list-style">
                            <li>Weekly studies (because we’re always learning) - various times and days during the week.</li>
                            <li>Mercy and Justice - helping out in our world on various events, responding to issues and doing good wherever we possibly can.</li>
                            <li>Christianity explored - for any people who want to learn more about Jesus, church, Christianity, or simply understand ‘what is the deal?’</li>
                            <li>Christmas and Easter - these are big celebrations for us, come and join in!</li>
                            <li>Annual events - quarterly organised activities where we can ‘hang out’ and enjoy each others company.</li>
                            <li><a href="/mainlymusic">mainly music</a> - for families of preschoolers</li>
                          </ul>

                        </div>



                      </div>
                    </div>
                  </div>  </div>



              </div>




            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhatWeDo;
