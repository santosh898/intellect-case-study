import styled from "@emotion/styled";

/* 
Followed this guide to customize the range input
https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/
*/

export const StyledInput = styled.input<{ percentage?: number }>`
  appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */

  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.75em;
    cursor: pointer;
    background: linear-gradient(
      to right,
      #6eacda 0%,
      #6eacda 30%,
      white 30%,
      white 100%
    );
    /*
      There's no selector to style just the filled portion,
      we can only style the whole track. 
      So we have to employ the linear gradient way.
      look at the implementation for percentage calculations.
   */
    background: ${({ percentage = 0 }) => `linear-gradient(
      to right,
      #6eacda 0%,
      #6eacda ${percentage}%,
      white ${percentage}%,
      white 100%
    )`};
    border-radius: 1em;
  }

  &::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 2px solid white;
    height: 1.25em;
    width: 1.25em;
    border-radius: 50%;
    background: #6eacda;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -0.25em;
  }

  &:focus::-webkit-slider-runnable-track {
    background: ${({ percentage = 0 }) => `linear-gradient(
      to right,
      #6eacda 0%,
      #6eacda ${percentage}%,
      white ${percentage}%,
      white 100%
    )`};
  }

  &::-moz-range-track {
    width: 100%;
    height: 0.75em;
    cursor: pointer;
    background: ${({ percentage = 0 }) => `linear-gradient(
      to right,
      #6eacda 0%,
      #6eacda ${percentage}%,
      white ${percentage}%,
      white 100%
    )`};
    border-radius: 1em;
  }

  &:focus::-moz-range-track {
    background: ${({ percentage = 0 }) => `linear-gradient(
      to right,
      #6eacda 0%,
      #6eacda ${percentage}%,
      white ${percentage}%,
      white 100%
    )`};
  }

  &::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 2px solid white;
    height: 1.25em;
    width: 1.25em;
    border-radius: 50%;
    background: #6eacda;
    cursor: pointer;
    margin-top: -0.25em;
  }
`;
