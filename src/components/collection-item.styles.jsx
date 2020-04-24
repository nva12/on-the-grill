import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;

export const CollectionItemImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionItemFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
`;

export const CollectionItemFooterName = styled.span`
  margin-bottom: 15px;
`;

export const CollectionItemFooterPrice = styled.span`
  text-align: right;
  flex-shrink: 0;
  margin-left: 0.5rem;
`;
