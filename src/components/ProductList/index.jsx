import React from "react";
import { Grid } from "@material-ui/core";
import { ProductItem } from "../ProductItem";

const ProductListComponent = ({ items }) => {
  const data = items || [];
  for (let index = 0; index < 4; index++) {
    data.push(index);
  }
  return (
    <Grid container spacing={4}>
      {data.map((item) => (
        <Grid item key={item} xs={6} sm={4} md={3}>
          <ProductItem />
        </Grid>
      ))}
    </Grid>
  )
};

export const ProductList = React.memo(ProductListComponent);