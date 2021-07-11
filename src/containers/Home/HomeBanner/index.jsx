import React from "react";
import * as Styles from "./styles";

const HomeBannerComponent = () => {
  return (
    <div>
      <div css={Styles.bannerStyle} />
    </div>
  )
};

export const HomeBanner = React.memo(HomeBannerComponent);