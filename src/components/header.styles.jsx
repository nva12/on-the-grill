import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  height: 60px;
  width: 100%;
  max-width: 1260px;
  margin: 0 auto 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const BrandContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
`;

export const LogoContainer = styled.div`
  width: 60px;
  margin-right: 32px;

  @media screen and (max-width: 800px) {
    width: 50px;
  }
`;

export const BrandName = styled.h1`
  margin: 0;
  font-family: 'Bangers', cursive;
  font-weight: 300;
  font-size: 54px;
  letter-spacing: 2px;
`;

export const OptionsContainer = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;
`;
