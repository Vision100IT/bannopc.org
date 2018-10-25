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

import AllSermons from './pages/sermons/AllSermons';
import SermonPage from './pages/sermons/SermonPage';
import SermonSeriesPage from './pages/sermons/SermonSeriesPage';
import ContactUs from './pages/ContactUs';


class OtherPageWrapper extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/whoweare" component={WhoWeAre} />
          <Route exact path="/whatwedo" component={WhatWeDo} />
          <Route exact path="/visitus" component={VisitUs} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/partnership" component={GospelPartnership} />
          <Route path="/contact" component={ContactUs} />


          <Route exact path="/sermons" component={AllSermons} />
          <Route exact path="/node/:nid" component={SermonPage} />
          <Route exact path="/series/:nid" component={SermonSeriesPage} />
          <Route exact path="/node/:nid/:title" component={SermonPage} />


          <Route path="/*" component={OtherPageContent} />
        </Switch>

      </section>
    );
  }
}

export default OtherPageWrapper;
