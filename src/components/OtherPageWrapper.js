import React from 'react';
//eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GenericAPIPage from './pages/GenericAPIPage'

import VisitUs from './pages/VisitUs';

import AllSermons from './pages/sermons/AllSermons';
import SermonPage from './pages/sermons/SermonPage';
import SermonSeriesPage from './pages/sermons/SermonSeriesPage';
import ContactUs from './pages/ContactUs';


export default function OtherPageWrapper({ pagesData }) {
  return pagesData ? (
    <Switch>
      <Route path="/contact" component={ContactUs} />


      <Route exact path="/sermons" component={AllSermons} />
      <Route exact path="/node/:nid" component={SermonPage} />
      <Route exact path="/series/:nid" component={SermonSeriesPage} />
      <Route exact path="/node/:nid/:title" component={SermonPage} />

      <Route exact path="/visitus" render={({ match }) => (
        <VisitUs
          slug="visitus"
          pageData={pagesData ? pagesData['visitus'] : undefined}
        />
      )} />


      <Route exact path="/:slug" render={({ match }) => (
        <GenericAPIPage
          slug={match.params.slug}
          pageData={pagesData ? pagesData[match.params.slug] : undefined}
        />
      )} />
    </Switch>
  ) : ('');
}
