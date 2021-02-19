import React, { useState, useEffect } from 'react';
import { fetchDrupalData } from '../../utils/fetch-functions';
import ContentWrapper from '../content-wrapper';
import TitleBreadcrumb from './title-breadcrumb';
import WhereToFindUs from '../homepage/where-to-find-us';
import { churchDetails } from '../../lib/config'

export default function Page({ pageData }) {
  const [data, setData] = useState(pageData);
  const [dataFetched, setDataFetched] = useState(Boolean(pageData));
  const [pageExists, setPageExists] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (dataFetched === false) {
      fetchDrupalData('page', { ['slug']: 'visitus' }).then(response => {//eslint-disable-line
        if (response.length > 0) {
          setData(response[0]);
        }
        else {
          setPageExists(false);
        }
        setDataFetched(true);
        setLoading(false)
      });
    } else {
      setData(pageData);
      setLoading(false)
    }
  }, [dataFetched, pageData, loading]);

  return dataFetched === true ? (
    <section>
      <TitleBreadcrumb
        title={data ? data.node_title : ''}
        breadcrumbs={[['Home', '/']]}
      />
      <ContentWrapper width="wide">
        {data && pageExists ? <div className="content" dangerouslySetInnerHTML={{ __html: data.content }} /> : <div className="content">Page not found.</div>}
        {loading === false ? <WhereToFindUs id="map_canvas" height={450} colWidths="col-md-12 col-xs-12" churchDetails={churchDetails} /> : ''}
      </ContentWrapper>
    </section>
  ) : ('');
}
