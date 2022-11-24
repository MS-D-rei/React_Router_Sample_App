import styled from 'styled-components';

export const CommentsSection = styled.section`
  text-align: center;

  & button {
    font-size: 1.25rem;
    text-decoration: none;
    background-color: teal;
    color: white;
    border-radius: 4px;
    padding: 0.75rem 1.5rem;
    border: 1px solid teal;
    cursor: pointer;
  }

  & button:hover,
  button:active {
    background-color: #11acac;
    border-color: #11acac;
  }
`;
