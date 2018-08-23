/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import OtherPageContent from './OtherPageContent';

import WhoWeAre from './pages/WhoWeAre';
import WhatWeDo from './pages/WhatWeDo';
import VisitUs from './pages/VisitUs';
import Resources from './pages/Resources';
import GospelPartnership from './pages/GospelPartnership';


class OtherPageWrapper extends Component {
  render() {
    return (
      <section>
      <Switch>
        <Route exact path="/WhoWeAre" component={WhoWeAre}/>
        <Route exact path="/WhatWeDo" component={WhatWeDo}/>
        <Route exact path="/VisitUs" component={VisitUs}/>
        <Route exact path="/Resources" component={Resources}/>
        <Route exact path="/Partnership" component={GospelPartnership}/>



        <Route path="/*" component={OtherPageContent} />
      </Switch>

      </section>
    );
  }
}

export default OtherPageWrapper;
