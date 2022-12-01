import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NoQuotesFoundDiv = styled.div`
  height: 20rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    color: #262c2c;
    font-size: 3rem;
    font-weight: bold;
  }
`;

export const NoQuotesFoundAddQuoteLink = styled(Link)`
  text-decoration: none;
  background-color: teal;
  color: white;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  border: 1px solid teal;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #11acac;
    border-color: #11acac;
  }
`;
