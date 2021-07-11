import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import * as Styles from "./styles";

const ProductItemComponent = () => {
    return (
      <Link to="/products">
        <Card css={Styles.cardStyle}>
          <CardMedia image="/item.png" css={Styles.imageStyle} />
          <CardContent>
            <Typography variant="caption">Chuột Apple Magic Mouse 2</Typography>
            <Typography variant="h5">400.000 đ</Typography>
            <Typography variant="subtitle2" color="textSecondary" css={Styles.hiddenPrice}>800.000 đ</Typography>
          </CardContent>
        </Card>
      </Link>
    )
};

export const ProductItem = React.memo(ProductItemComponent);