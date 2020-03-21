import React, { Component } from 'react';


class Welcome extends Component {
  render() {
    return (
      <section>
        <div id="content-region">
          <div className="container">
            <div className="row">
              <div id="main-content-region" className="main-content col-xs-12">

                <div className="region region-content">


                  <div className="content">

                    <div className="content">
                      <div className="text-center">
                        <a href="/covid19"><button className="btn btn-primary">For Those in Need in COVID-19</button></a>
                      </div>
                    </div>

                  </div>
                </div>

              </div> {/* /main-content-region */}
            </div> {/* /row */}
          </div> {/* /container */}
        </div> {/* /content-region */}
      </section>
    );
  }
}

export default Welcome;
