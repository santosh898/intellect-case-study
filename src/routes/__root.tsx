import { theme } from "@/theme";
import { css, ThemeProvider } from "@emotion/react";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider theme={theme}>
      <div
        css={css`
          display: flex;
          justify-content: center;
          height: 100%;
          overflow: auto;
        `}
      >
        <Outlet />
      </div>
    </ThemeProvider>
  ),
});
