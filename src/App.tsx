import { css } from "@emotion/react";

import { ProgressIndicator } from "@/widgets";

function App() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        height: 100%;
        overflow: auto;
      `}
    >
      <ProgressIndicator />
    </div>
  );
}

export default App;
