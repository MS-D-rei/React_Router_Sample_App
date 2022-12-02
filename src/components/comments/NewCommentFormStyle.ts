import styled from 'styled-components';

export const NewCommentFormForm = styled.form`
  margin-top: 1rem;
  position: relative;
  text-align: center;
`;

export const NewCommentFormLoadingDiv = styled.div`
  margin: 3rem auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NewCommentFormControlDiv = styled.div`
  margin-bottom: 0.5rem;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & textarea {
    font: inherit;
    padding: 0.35rem;
    border-radius: 4px;
    background-color: #f0f0f0;
    border: 1px solid #c1d1d1;
    display: block;
    width: 100%;
    font-size: 1.25rem;

    &:focus {
      background-color: #cbf8f8;
      outline-color: teal;
    }
  }
`;

export const NewCommentFormActionButton = styled.button`
  font-size: 1.25rem;
`;

// export const NewCommentFormLoadingDiv = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(255, 255, 255, 0.7);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
