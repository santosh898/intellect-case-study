import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CircularDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const DottedContainer = styled(CircularDiv)<{
  percentage?: number;
}>`
  width: 14em;
  height: 14em;
  padding: 1.5em;
  position: relative;
  border-radius: 50%;
  margin: 4em;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: -1;
    background-image: url("border.svg");
    transform: ${({ percentage = 0 }) => `rotate(${percentage}deg)`};
  }
`;

export const Progress = styled(CircularDiv)<{ percentage?: number }>`
  padding: 0.25em;
  background: ${({ percentage = 0 }) =>
    `conic-gradient(white 0% ${percentage}%, transparent ${percentage}% 100%)`};
`;

export const CircularContainer = styled(CircularDiv)`
  padding: 1.25em;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const InnerCircle = styled(CircularDiv)`
  background-color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgressValue = styled.p`
  font-size: 4em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.background};
`;
