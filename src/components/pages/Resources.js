import React, { Component } from 'react';
import headerImg from '../../assets/resources.png';

class Resources extends Component {

  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">

              <img className="img img-responsive" src={headerImg} alt="" />
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

                          <h5>Our sermons are also available to watch on <a href="https://www.youtube.com/channel/UCAjweVNxQ_A_jOdCwv_TfVA/videos" target="_blank" rel="noreferrer noopener">YouTube</a> and you can subscribe to our <a href="https://itunes.apple.com/au/podcast/bannockburn-presbyterian-church/id1440112965?mt=2" rel="noreferrer noopener" target="_blank">podcast</a>.</h5>


                          <br />
                          {/*<h3>Good Books</h3>

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
                          <a href="https://www.publicchristianity.org/" rel="noopener noreferrer" target="_blank">The Centre for Public Christianity</a>*/}

                          <h3>Other Resources</h3>

                          <h4><a href="https://www.youtube.com/watch?v=nNsWOZSu4VE" rel="noreferrer noopener" target="_blank">Not sure about Jesus?</a></h4>

                          <h4><a href="https://www.youtube.com/watch?v=bPaeo19sQXw" rel="noreferrer noopener" target="_blank">Not sure about the Bible?</a></h4>

                          <h4><a href="https://www.publicchristianity.org/fortheloveofgod/" rel="noreferrer noopener" target="_blank">Not sure about the Church?</a></h4>

                          <h4><a href="https://www.youtube.com/watch?v=ulmaUtbayGY" rel="noreferrer noopener" target="_blank">Struggling with suffering and a good God?</a></h4>

                          <h4><a href="https://au.thegospelcoalition.org/" rel="noreferrer noopener" target="_blank">Looking for helpful resources to grow as a Christian?</a></h4>

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
