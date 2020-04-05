import React from 'react';
import { Helmet } from 'react-helmet';

export default (pageName) => (
  <Helmet>
    <title>Tamastudy | {pageName}</title>
  </Helmet>
);
