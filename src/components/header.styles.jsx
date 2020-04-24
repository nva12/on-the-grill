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
`;

export const LogoContainer = styled(Link)`
  width: 60px;
  padding-left: 15px;
`;

export const BrandContainer = styled.h1`
  margin: 0;
  font-family: 'Parisienne', cursive;
  font-weight: 300;
  font-size: 38px;
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
`;
