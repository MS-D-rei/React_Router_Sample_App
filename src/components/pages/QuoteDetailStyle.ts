import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const QuoteDetailCenteredDiv = styled.div`
  margin: 3rem auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuoteDetailLink = styled(Link)`
  cursor: pointer;
  font: inherit;
  color: teal;
  border: none;
  background-color: none;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;

  &:hover,
  &:active {
    background-color: teal;
    color: white;
  }
`;
