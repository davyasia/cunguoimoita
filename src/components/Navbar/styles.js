import { css } from "@emotion/react";
import { Colors } from "../../common";

const MAX_HEIGHT = "80px";
export const containerStyle = css`
  background: ${Colors.primary};
  height: ${MAX_HEIGHT};
  padding-left: 16px;
`;

export const menuButtonStyle = css`
  width: ${MAX_HEIGHT};
  height: ${MAX_HEIGHT};
`;
