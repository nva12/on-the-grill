import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 900px) {
    width: 70%;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;

    span {
      float: right;
    }
  }

  @media screen and (max-width: 480px) {
    width: 30%;
    &:last-child {
      width: 10%;
    }
    &:first-child {
      display: none;
    }
  }

  @media screen and (max-width: 380px) {
    font-size: 14px;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
