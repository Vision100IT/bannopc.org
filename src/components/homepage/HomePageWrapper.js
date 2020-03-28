import React, { useEffect, useState } from 'react';
//import Slider from './Slider';
import sliderimg from '../../assets/welcome1.png'
import styled from '@emotion/styled';
import Welcome from './Welcome';
import SiteNotification from '../SiteNotification';

const SliderImg = styled('img')`
  width:100%;
  height: auto;
`;

const SliderWrapper = styled('div')`
  text-align: center;
`;

export default function HomePageWrapper() {
  const [showNotification, setShowNotification] = useState(true)
  const onNotificationClose = () => {
    setShowNotification(false)
  };
  useEffect(() => {

  }, []);
  return (
    <section>
      <div className="main-wrapper wide">
        <SliderWrapper>
          <SliderImg className="img-responsive img-full-width" src={sliderimg} width="1440" height="600" />
        </SliderWrapper>
        <Welcome />
        <SiteNotification
          showNotification={showNotification}
          onClose={onNotificationClose}
        />
        {/*}  <HomePageContent />*/}
      </div>
    </section>
  );
}
