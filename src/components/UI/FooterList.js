import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Heading } from './Heading';

export const FooterList = ({ length, onPress }) => {
  return length > 3 ? (
    <TouchableOpacity onPress={onPress}>
      <Heading style={{ fontSize: 18, color: 'orange' }}>
        This is End of the List. Scroll to top!
      </Heading>
    </TouchableOpacity>
  ) : null;
};