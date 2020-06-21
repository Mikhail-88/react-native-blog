import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { Alert  } from 'react-native';

import { fonts } from './src/utils/fonts';
import { Routes } from './src/navigation/Routes';
import { WrapCenter } from './src/components/UI/WrapCenter';
import { store } from './src/redux/store';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <WrapCenter>
        <AppLoading
          startAsync={fonts}
          onError={() => Alert.alert('Something went wrong, try again later!')}
          onFinish={() => setIsReady(true)}
        />
      </WrapCenter>
    );
  }

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};