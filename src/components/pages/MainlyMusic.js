import React, { Component } from 'react';
import headerImg from '../../assets/mainlymusic.png';

class MainlyMusic extends Component {

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


                                                    <p>
                                                        mainly music is a fun music group for parents or primary care givers to enjoy together with their young child. Through music, rhythm and rhymes children develop gross and fine motor skills, language, imagination, mathematical and pre-reading skills as well as socialise with others. Families are also given the chance to think about the God-part of life, all in a fun and friendly family environment.
                                                    </p>

                                                    <p>
                                                        The program is run weekly on Tuesday 10:00-1130 during school terms with morning tea provided. The cost is $5 per session per family. If you are a family with preschool aged children you are most welcome to come along and try!
                                                    </p>

                                                    <p>
                                                        For more information contact Carolyn on 0438 334 625. Places are limited.
                                                    </p>




                                                </div>



                                            </div>
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
}

export default MainlyMusic;
