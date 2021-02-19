import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-responsive-audio-player';
import '../../assets/css/audioplayer.css';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import SVGLogo from '../../assets/img/Logo.svg'

const Img = styled('img')`
  width: 100%;
  height: 100%;
`;

const Header = styled('h2')`
  color: #fff;
  font-family: Roboto Slab;
  font-size 2.2em;
  font-style: normal;
  font-weight: 300;
  margin-top: 0;
  `;

export default function LatestSermon({
  latestSermon: { nid, sermon_img, series_img, node_title, preacher, url },
  showImg
}) {
  return (
    <section style={{ textAlign: "left" }}>
      <Header>Latest Sermon</Header>
      {node_title ? (
        <div>
          {showImg === true ? <Img src={sermon_img ? sermon_img : series_img ? series_img : SVGLogo} /> : ''}
          <Link to={`/sermon/${nid}`} dangerouslySetInnerHTML={{ __html: node_title }} />
          <div dangerouslySetInnerHTML={{ __html: preacher }}></div>
          <AudioPlayer
            playlist={[{ url }]}
            controls={['playpause', 'spacer', 'progress']}
          />
          <a href={url}>Download Talk</a>
        </div>
      ) : (
          'loading...'
        )}
    </section>
  );
}

LatestSermon.propTypes = {
  latestSermon: PropTypes.object.isRequired,
  nid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  sermon_img: PropTypes.string.isRequired,
  node_title: PropTypes.string.isRequired,
  preacher: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};