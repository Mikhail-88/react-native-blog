import React from 'react';
import { ActivityIndicator } from 'react-native';

import { WrapCenter } from './WrapCenter';

export const Loader = () => (
  <WrapCenter>
    <ActivityIndicator size='large' color={'orange'} />
  </WrapCenter>
);