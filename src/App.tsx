import { css } from "@emotion/react";
import { SignalLevel } from "./widgets";

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
      <SignalLevel />
    </div>
  );
}

export default App;
