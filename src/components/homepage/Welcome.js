import React from 'react';
import ContentWrapper from '../content-wrapper';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Button = styled('button')`
display: inline-block;
border-color: #c2b49a;
color: #c2b49a;
padding: 7px 35px;
background: transparent;
border: 2px solid;
cursor: pointer;
:active,
:hover{
  border-color: #c2b49a;
  background-color: #c2b49a;
  color: #fff;
  
}
`

export default function Welcome() {
  return (
    <ContentWrapper>
      <div style={{ textAlign: "center" }}>
        <Link to="/covid19"><Button className="btn btn-primary">For Those in Need in COVID-19</Button></Link>
      </div>
    </ContentWrapper >
  );
}
