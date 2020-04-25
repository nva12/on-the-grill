import styled from 'styled-components';

export const LogInContainer = styled.div`
  padding-top: 15px;
  text-align: center;

  @media screen and (max-width: 900px) {
    width: 380px;
    margin: 0 auto;
  }
`;

export const SignInAndSignUpContainer = styled.div`
  max-width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;
