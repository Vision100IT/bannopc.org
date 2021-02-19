/** @jsx jsx */
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import {
  /*IoIosPin,*/
  IoIosMail,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoYoutube
} from 'react-icons/io';

import {
  FaRss,
  FaEnvelope
} from 'react-icons/fa'
import Map from './models/google-map'
import { fetchDrupalData } from '../utils/fetch-functions';
import LatestSermon from './homepage/latest-sermon'

const icon = css`
  stroke: white;
  stroke-width: 20px;
  fill: none;
  width: 1.3em;
  height: 1.3em;
  fill: #f0f0f0;
  @media (min-width: 700px) {
    margin-bottom: '20px';
  }
`;

const iconOutline = css`
stroke: white;
stroke-width: 20px;
fill: none;
width: 2em;
height: 2em;
margin-left: 3px;
@media (min-width: 700px) {
  margin-bottom: '20px';
}
`;

const Grid = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  color: #f0f0f0;
  background-color: #2b2b2b;
  padding: 40px 7.5vw 20px 7.5vw;
  @media (min-width: 955px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'footer-left footer-centre footer-right';
  }
  @media (max-width: 954px) {
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }
  a:hover{
    color: #fff;

  }
`;

const MetaGrid = styled('div')`
  display: grid;
  color: #fff;
  grid-template-columns: 1fr 1fr;
  background-color: #222222;
  padding: 0 10vw;
  align-items: center;
  a:hover{
    color: #fff;
  }
`;

const centered = css`
  text-align: center;
`;

const SermonWrapper = styled('div')`
max-width: 300px;
text-align: center;
display: inline-block;
`;

export default function Footer({ globalSermons, setGlobalSermons }) {
  const [sermons, setSermons] = useState(globalSermons);
  useEffect(() => {
    setSermons(globalSermons);
  }, [globalSermons]);

  useEffect(() => {
    if (!sermons) {
      fetchDrupalData('sermons', {}).then(response => {
        setGlobalSermons(response);
      });
    }
  }, [sermons, setGlobalSermons]);

  console.log(sermons)

  return (
    <section>
      <Grid>
        <div css={centered}>
          <div style={{ display: "inline-block" }}>
            <Map
              id="footer-map"
              location={{ lat: -38.048737, lng: 144.172359 }}
              height={200}
              mapWidth={200}
              disableUI={true}
            />
          </div>
          <p>
            Sundays 10am, <a href="https://goo.gl/maps/x6aitfUS8ZU2">18 Moore Street</a>,<br />
            Bannockburn, Victoria, 3331
          </p>
        </div>
        <div css={centered}>
          <SermonWrapper><LatestSermon latestSermon={sermons ? sermons[0] : ''} /></SermonWrapper>
        </div>
        <div css={centered}>
          <FaEnvelope css={iconOutline} /> <IoLogoFacebook css={iconOutline} /> <IoLogoYoutube css={iconOutline} /> <FaRss css={iconOutline} />
          <p><a href="mailto:info@bannopc.org">info@bannopc.org</a></p>
          <p>
            <a
              href="http://facebook.com/bannockburnpressychurch"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/bannockburnpressychurch
            </a>
            <br />
            <a
              href="https://www.youtube.com/channel/UCAjweVNxQ_A_jOdCwv_TfVA/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bannockburn on YouTube
            </a>
            <br />
            <a
              href="https://itunes.apple.com/au/podcast/bannockburn-presbyterian-church/id1440112965?mt=2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe to Our Podcast
            </a>
          </p>
        </div>
      </Grid>
      <MetaGrid>
        <div>
          <p>
            Website built and maintained by{' '}
            <a href="http://newfrontdoor.org">New Front Door</a>
          </p>
        </div>
        <div css={{ textAlign: 'right' }}>
          <a href="https://www.facebook.com/NewFrontDoorIT/">
            <IoLogoFacebook css={icon} />
          </a>
          <a href="https://twitter.com/NewFrontDoorIT">
            <IoLogoTwitter css={icon} />
          </a>
          <a href="mailto:contactus@newfrontdoor.org">
            <IoIosMail css={icon} />
          </a>
        </div>
      </MetaGrid>
    </section>
  );
}
