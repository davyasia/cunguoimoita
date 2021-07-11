import React from "react";
import { Typography } from "@material-ui/core";
import { ProductList, Wrapper } from "../../../components";
import * as Styles from "./styles";

const HomeProductComponent = () => {
    return (
      <Wrapper css={Styles.wrapperStyle}>
        <Typography variant="h5" css={Styles.titleStyle}>
          Sản phẩm
        </Typography>
        <ProductList />
      </Wrapper>
    )
};

export const HomeProduct = React.memo(HomeProductComponent);