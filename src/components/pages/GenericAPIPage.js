import React, { useEffect, useState } from 'react';
import { getPageContent } from '../../utils/fetchJSON';


export default function GenericAPIPage(pageData, slug) {
    const [data, setData] = useState(pageData);
    const [dataFetched, setDataFetched] = useState(Boolean(pageData));
    const [pageExists, setPageExists] = useState(Boolean(pageData));
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (dataFetched === false) {
            if (this.props.pageData) {
                setLoading(false)
                setData(pageData);
                setDataFetched(true);
            }
            else {
                getPageContent(slug, function (data) {
                    setData(data);
                    setLoading(false)
                    data.pageData.length > 0 ? setPageExists(true) : setPageExists(false);
                });
            }
        }
        else {
            setData(pageData);
            setLoading(false);
        }
    }, [dataFetched, data, pageData, loading, setLoading, slug]);

    var pageHeader = "";
    var content = "";
    if (pageExists && data.pageData) {
        //page exists
        console.log(data)
        pageHeader = data.pageData.header_image ? <img className="img img-responsive" src={data.pageData.header_image} alt="" ></img> : (
            <section>
                <div id="top-content-left-region" className="padding-top-15 padding-bottom-15 top-content-left col-xs-12 col-md-6 text-center-sm">
                    <div id="page-title-block" className="page-title block">
                        <h1>{data.pageData.node_title}</h1>
                    </div>
                </div>

                <div id="top-content-right-region" className=" padding-top-15 top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                    <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                        {data.pageData.breadcrumbs ? <div className="breadcrumbs" dangerouslySetInnerHTML={{ __html: data.pageData.breadcrumbs }} /> : <div className="breadcrumbs"><a href="/">Home</a></div>}
                    </div>
                </div>
            </section>);
        content = data.pageData.content;
    }
    else if (data !== null && loading === false) {
        //no page
        content = <p>Sorry this page does not exist.</p>
        pageHeader = (<React.Fragment><div id="top-content-left-region" className="padding-top-15 padding-bottom-15 top-content-left col-xs-12 col-md-6 text-center-sm">
            <div id="page-title-block" className="page-title block">
                <h1>Page not found</h1>
            </div>
        </div>
            <div id="top-content-right-region" className=" padding-top-15 top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                    <div className="breadcrumbs"><a href="/">Home</a></div>
                </div>
            </div></React.Fragment>)
    }
    else {
        //loading
        content = <p>Loading...</p>
    }
    return (
        <section>
            <div id="top-content-region" className="top-content block-15 bg-color-grayLight1">
                <div className="container">
                    <div className="row">
                        {pageHeader}
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
                                        {loading === false && pageExists && data.pageData ? <div className="content" dangerouslySetInnerHTML={{ __html: content }}></div> : 'Sorry that page could not be found.'}
                                        {loading === true ? <div className="content">Loading</div> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
