import styled from "@emotion/styled";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

const StyledLink = styled(Link)`
  font-size: 2em;
`;

export const Route = createLazyFileRoute("/")({
  component: () => (
    <Container>
      <StyledLink to="/signal-level">Signal Level</StyledLink>
      <StyledLink to="/signal-level-lite">Signal Level Lite</StyledLink>
      <StyledLink to="/progress-indicator">Progress Indicator</StyledLink>
    </Container>
  ),
});
