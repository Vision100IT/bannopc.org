import React, { Component } from 'react';
import WhereToFindUs from '../homepage/WhereToFindUs';

class VisitUs extends Component {

  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-custom">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Visit Us</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    {/*<a href="/">Home</a>*/}
                  </div>
                </div>
              </div>
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
                          <h2>On Sundays at 10am</h2>
                          <p>
                          <em>“Let the word of Christ dwell in you richly” (Colossans 3:16) </em></p>
                          <p>
                             On Sundays we want the gospel message to shape all we do. Our preaching, music, and prayers aim to do this in a way that connects with our local community. <br/>
                          </p>
                          <br/>
                          <h4>Kids in Church</h4>
                          <p>
                              At BPC we really value children as apart of our community. We encourage families (parents and children) to worship together. 
                              We don’t have a Sunday School (kids church) but we have other ways of making sure children are very involved. 
                              We have a kid’s talk and song during the service. We also have facilities like a cry room, change room, as well as a play ground.<br/><br/>

                              We know trying to get little ones to sit still is difficult but we believe worshiping with our children makes it very worthwhile. 
                              So if you’re worried about your children making too much noise or being a distraction, please don’t! We appreciate the joyful noise they make!


                          </p>
                          <WhereToFindUs id="map_canvas" height="450px" colWidths="col-md-12 col-xs-12" />


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

export default VisitUs;
