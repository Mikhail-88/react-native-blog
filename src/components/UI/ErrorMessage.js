import React from 'react';

import { WrapCenter } from './WrapCenter';
import { Heading } from './Heading';

export const ErrorMessage = ({ message }) => (
  <WrapCenter>
    <Heading>Something went wrong, try again later!</Heading>
    <Heading>Error message: {message}!</Heading>
  </WrapCenter>
);