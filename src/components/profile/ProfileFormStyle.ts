import styled from 'styled-components';

export const ProfileFormForm = styled.form`
  width: 95%;
  max-width: 25rem;
  margin: 2rem auto;
`;

export const ProfileFormControlDiv = styled.div`
  margin-bottom: 0.5rem;

  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #353336;
    display: block;
  }

  & input {
    display: block;
    font: inherit;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #38015c;
    padding: 0.25rem;
    background-color: #f7f0fa;
  }
`;

export const ProfileFormActionDiv = styled.div`
  margin-top: 1.5rem;

  & button {
    font: inherit;
    cursor: pointer;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    background-color: #38015c;
    color: white;
    border: 1px solid #38015c;
  }

  & button:hover {
    background-color: #540d83;
    border-color: #540d83;
  }
`;
