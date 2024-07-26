import { css } from "@emotion/react";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
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
  ),
});
