import React from "react";
import { Helmet as ReactHelmet } from "react-helmet";

const Helmet = ({ title }) => (
  <ReactHelmet>
    <meta charSet="utf-8" />
    <title>{`${title} | Jokūbas Toločka`}</title>
    <link rel="canonical" href="http://localhost:8000" />
  </ReactHelmet>
);

export default Helmet;
