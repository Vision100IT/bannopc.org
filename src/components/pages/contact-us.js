import React, { useReducer } from 'react';
import styled from '@emotion/styled';
import ContactForm from '../models/contact-form';
import ContentWrapper from '../content-wrapper';
import TitleBreadcrumb from './title-breadcrumb';

// Import { postToWebform } from '../../utils/postToAPI';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 20px;
  @media (max-width: 500px) {
    grid-template-columns: 1fr
  }
`;

function reducer(state, action) {
  return { ...state, [action.name]: action.value };
}

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  formErrorMessage: '',
  formValid: false
};

export default function ContactUs() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSubmit() {
    console.log('Submitting...');
  }

  return (
    <section>
      <TitleBreadcrumb title="Contact Us" breadcrumbs={[['Home', '/']]} />
      <ContentWrapper>
        <p>
          If you have any questions about Bannockburn Presbyterian Church, want to visit us or would like more information on how to get involved, please contact us - we would love to hear from you.
        </p>

        <Grid>
          <div>
            <h3>Address</h3>
            <p>
              Bannockburn Presbyterian Church<br />
            18 Moore Street,<br />
            Bannockburn, Victoria, 3331
            </p>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>
              <b>Facebook:</b> &nbsp;<a href="http://facebook.com/bannockburnpressychurch" target="_blank" rel="noreferrer noopener">/bannockburnpressychurch</a>
              <br />
              <b>Email:</b>&nbsp;<a href="mailto:info@bannopc.org">info@bannopc.org</a>
              <br />
              <b>Phone:</b>&nbsp;0407 527 441
            </p>
          </div>
        </Grid>
        <ContactForm
          dispatch={dispatch}
          state={state}
          handleSubmit={handleSubmit}
        />
      </ContentWrapper>
    </section>
  );
}
