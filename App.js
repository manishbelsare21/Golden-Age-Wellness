
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';


//importing screens
import Welcome from './src/screens/Welcome';
import Dashboard from './src/screens/Dashboard';


import { useSelector } from 'react-redux'


const Screen = () => {
  const { name } = useSelector((state) => state.userAuth)
  if (name != null) {
    return <Dashboard />
  } else {
    return <Welcome />
  }
}




export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <Screen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
