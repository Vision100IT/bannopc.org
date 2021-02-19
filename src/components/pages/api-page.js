import React, { useState, useEffect } from 'react';
import { fetchDrupalData } from '../../utils/fetch-functions';
import ContentWrapper from '../content-wrapper';
import TitleBreadcrumb from './title-breadcrumb';
import TitleHeaderImage from './title-header-image'


export default function Page({ slug, pageData }) {
    const [data, setData] = useState(pageData);
    const [dataFetched, setDataFetched] = useState(Boolean(pageData));

    useEffect(() => {
        if (dataFetched === false) {
            fetchDrupalData('page', { ['slug']: slug }).then(response => {//eslint-disable-line
                if (response.length > 0) {
                    setData(response[0]);
                }
                setDataFetched(true);
            });
        } else {
            setData(pageData);
        }
    }, [dataFetched, slug, pageData]);

    return dataFetched === true ? (
        <section>
            {data && data.header_image ? <TitleHeaderImage image={data.header_image} /> :
                <TitleBreadcrumb
                    title={data ? data.node_title : ''}
                    breadcrumbs={[['Home', '/']]}
                />}
            <ContentWrapper width="wide">
                {data ? <div className="content" dangerouslySetInnerHTML={{ __html: data.content }} /> : <div className="content">Page not found.</div>}
            </ContentWrapper>
        </section>
    ) : ('');
}
