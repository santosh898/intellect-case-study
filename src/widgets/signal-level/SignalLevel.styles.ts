import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  gap: 1em;
  max-width: 425px;
  padding: 2em;
  width: 100%;
  flex: 1;
`;

export const Bar = styled.button`
  min-height: 0.5em;
  height: 1em;
  border-radius: 1em;
  border: none;
  box-shadow: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;
