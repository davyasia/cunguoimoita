import React from "react";
import { Grid } from "@material-ui/core";
import {
  Facebook as FacebookIcon
} from "@material-ui/icons";
import { Link } from "gatsby";
import { Wrapper } from "../Wrapper";
import * as Styles from "./styles";
import { Images } from "../../common";

const FooterComponent = () => {
    return (
      <Wrapper css={Styles.wrapperStyle}>
        <Grid container justifyContent="center">
          <Grid item xs>
            <img src={Images.Logo} css={Styles.logoStyle} alt="CuNguoiMoiTa's Logo" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Link to="/">Trang chủ</Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/">Sản phẩm</Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/">Liên hệ</Link>
          </Grid>
          <Grid item xs={12}>
            <FacebookIcon css={Styles.socialLogoStyle} />
            <img src={Images.LogoChoTot} css={Styles.socialLogoStyle} alt="logo ChoTot" />
          </Grid>
        </Grid>
      </Wrapper>
    )
};

export const Footer = React.memo(FooterComponent);