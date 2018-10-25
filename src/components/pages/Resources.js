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
                          <h5>A searchable list of our sermons can be found <a href="/sermons">here</a>.</h5>


                          <h5>Our sermons are also available to watch on <a href="https://www.youtube.com/channel/UCAjweVNxQ_A_jOdCwv_TfVA/videos" target="_blank" rel="noreferrer noopener">YouTube</a>.</h5>


                          <br />
                          <h3>Good Books</h3>

                          <h4>Sceptical about Jesus?</h4>
                          <a href="https://www.amazon.com.au/Reason-God-Belief-age-scepticism-ebook/dp/B00319M6TK/" rel="noopener noreferrer" target="_blank">The Reason for God: Belief in an Age of Scepticism by Timothy Keller</a><br />
                          <a href="https://www.amazon.com.au/Doubters-Guide-Jesus-Introduction-Believers-ebook/dp/B00VEYI0NK/" rel="noopener noreferrer" target="_blank">A Doubter's Guide to Jesus: An Introduction to the Man from Nazareth for Believers and Skeptics by John Dickson</a><br />
                          <a href="https://www.amazon.com.au/Doubters-Guide-Bible-Bestseller-Believers-ebook/dp/B00L0SZIHQ/" rel="noopener noreferrer" target="_blank">A Doubter's Guide to the Bible: Inside History’s Bestseller for Believers and Skeptics by John Dickson</a><br />
                          <a href="https://www.amazon.com.au/Doubters-Guide-Ten-Commandments-Better-ebook/dp/B01863JKV2/" rel="noopener noreferrer" target="_blank">A Doubter's Guide to the Ten Commandments: How, for Better or Worse, Our Ideas about the Good Life Come from Moses and Jesus by John Dickson</a>

                          <h4>Wanting to grow in your faith?</h4>
                          <a href="https://www.amazon.com.au/Knowing-God-J-I-Packer-ebook/dp/B005LWR98S" rel="noopener noreferrer" target="_blank">Knowing God by J. I. Packer</a><br />
                          <a href="https://www.amazon.com.au/Respectable-Sins-Jerry-Bridges-ebook/dp/B01N56NUIG" rel="noopener noreferrer" target="_blank">Respectable Sins by Jerry Bridges</a>

                          <h4>Struggling with Suffering?</h4>
                          <a href="https://www.amazon.com.au/Walking-God-through-Pain-Suffering-ebook/dp/B00CIVLV66" rel="noopener noreferrer" target="_blank">Walking with God through Pain and Suffering by Timothy Keller</a>

                          <h4>Helpful Web Resources</h4>
                          <a href="https://au.thegospelcoalition.org/" rel="noopener noreferrer" target="_blank">The Gospel Coalition</a><br />
                          <a href="https://www.publicchristianity.org/" rel="noopener noreferrer" target="_blank">The Centre for Public Christianity</a>

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
