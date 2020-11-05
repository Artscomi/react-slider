/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import ArrowIcon from "../img/arrow.svg";

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === "right" ? `right: 25px` : `left: 25px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        ${direction === "left" && "transform: rotate(-180deg)"};
        &:focus {
          outline: 0;
        }
      }
    `}
  >
    <img
      alt=""
      src={ArrowIcon}
    />
  </div>
);

export default Arrow;
