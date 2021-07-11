import React from 'react';
import { Navbar } from "../../components";
import { HomeBanner } from "./HomeBanner";
import { HomeProduct } from "./HomeProduct";

const HomeComponent = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <HomeProduct />
    </div>
  )
};

export const HomeContainer = React.memo(HomeComponent);
