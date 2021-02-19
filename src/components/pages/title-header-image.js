import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  background-color: #f6f6f6;
  padding: 0;
  margin: 0;
  text-align: center;
`;

export default function TitleHeaderImage({ image }) {
  return (
    <Wrapper>
      <img style={{ display: "inline-block" }} className="img img-responsive" src={image} alt="" ></img>
    </Wrapper>

  );
}
