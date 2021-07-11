import React from "react";
import * as Styles from "./styles";

const WrapperComponent = ({ children, className }) => {
    return (
      <div css={Styles.wrapperStyle} className={className}>
        {children}
      </div>
    )
};

export const Wrapper = React.memo(WrapperComponent);