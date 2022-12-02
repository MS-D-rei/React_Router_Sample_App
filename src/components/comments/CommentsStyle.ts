import styled from 'styled-components';

export const CommentsErrorP = styled.p`
  margin: 3rem auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  color: white;
`;

export const CommentsLoadingDiv = styled.div`
  margin: 3rem auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
