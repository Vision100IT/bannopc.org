import React, { Component } from 'react';

class Resources extends Component {

  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-custom">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Resources</h1>
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

                        <h3>Sermons</h3>

                        <h3>Good Books</h3>

                        <h4>Sceptical about Jesus?</h4>
                        Reasons for God - Tim Keller<br/>
                        John Dickson - Doubters Guides

                        <h4>Wanting to grow in your faith?</h4>
                        Knowing God - J. I Packer
                        Respectable Sins - Jerry Bridges

                        <h4>Struggling with suffering?</h4>
                        Walking with God - Tim Keller

                        <h3>Helpful web resources</h3>
                        Videos and websites with good content.
                        Centre for Public Christianity
                        Gospel Coalition
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

export default Resources;
