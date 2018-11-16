import React, { Component } from 'react';

import Slider from './Slider';
//import Welcome from './Welcome';
//import HomePageContent from './HomePageContent';

class HomePageWrapper extends Component {
  render() {
    return (
      <section>
        <div className="main-wrapper wide">
          <Slider />
          {/*<Welcome />
          <HomePageContent />*/}
        </div>}
      </section>
    );
  }
}

export default HomePageWrapper;
