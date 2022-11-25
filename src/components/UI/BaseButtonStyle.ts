import styled from 'styled-components';

export const BaseButton = styled.button`
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
