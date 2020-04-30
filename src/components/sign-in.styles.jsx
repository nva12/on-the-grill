import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    margin-bottom: 40px;
    width: 90%;
    max-width: 460px;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const SignInSubtitle = styled.span`
  margin: 10px 0;
`;
