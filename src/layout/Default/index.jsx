import React from "react";
import { Footer } from "../../components";

const LayoutDefault = ({ children }) => {
  return (
    <main>
      {children}
      <Footer />
    </main>
  )
};

export default LayoutDefault;
