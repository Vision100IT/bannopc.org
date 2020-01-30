import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { fetchDrupalPages } from './utils/fetchJSON';

import Navigation from './components/Navigation';
import HomePageWrapper from './components/homepage/HomePageWrapper';
import OtherPageWrapper from './components/OtherPageWrapper';
import Footer from './components/Footer';

import './assets/css/mediaelement/mediaelementplayer.min.css';

import './assets/css/simplenews/simplenews.css';
import './assets/css/alignmentstyles.css';


import './assets/css/font-awesome/font-awesome.min.css';

import './assets/css/tb_megamenu/bootstrap.css';
import './assets/css/tb_megamenu/base.css';
import './assets/css/tb_megamenu/default.css';
import './assets/css/tb_megamenu/compatibility.css';

import './assets/nestor/css/bootstrap.min.css';
import './assets/nestor/css/ionicons.min.css';
import './assets/nestor/css/flexslider.css';
import './assets/nestor/css/style.css';

import './assets/css/fontyourface/font.css';

import './assets/nestor/css/color/brown.css';
import './assets/css/custom.css';



export default function App() {
  const [pagesData, setPagesData] = useState();
  const [pagesFetched, setPagesFetched] = useState(false);

  useEffect(() => {
    if (pagesFetched === false) {
      fetchDrupalPages().then(result => {
        let mapped = result.map(item => ({
          [item.slug.toLowerCase()]: item
        }));
        let mappedObj = Object.assign({}, ...mapped);
        setPagesData(mappedObj);
        setPagesFetched(true);
      });
    }
  }, [pagesFetched, pagesData]);

  return pagesFetched === true ? (
    <Router>
      <div className="App">
        <Route path="*" component={Navigation} />
        <Route
          exact
          path="/"
          render={() => (
            <HomePageWrapper
            />
          )}
        />
        <Route path="/:path" render={() => <OtherPageWrapper pagesData={pagesData} />} />
        <Route path="*" render={({match}) => <Footer />} />
      </div>
    </Router>
  ) : ('');
}