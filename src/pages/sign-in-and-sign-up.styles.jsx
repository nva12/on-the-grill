import styled from 'styled-components';

export const LogInContainer = styled.div`
  padding-top: 15px;
  text-align: center;

  @media screen and (max-width: 900px) {
    width: 90%;
    max-width: 460px;
    margin: 0 auto;
    text-align: unset;
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

  @media screen and (max-width: 900px) {
    justify-content: flex-start;

    button {
      margin-left: 0;
    }
  }
`;
