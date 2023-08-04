// import React from 'react';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';

// import LoginScreen from './Screens/AuthPages/LoginScreen';
// import RegistrationScreen from './Screens/AuthPages/RegistrationScreen';
// import Home from './Screens/Home';

// const MainStack = createStackNavigator();

import { Provider } from 'react-redux';
import Main from './Screens/Main';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Text } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <NavigationContainer>
    //     <MainStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    //       <MainStack.Screen name="Regestration" component={RegistrationScreen} />
    //       <MainStack.Screen name="Login" component={LoginScreen} />
    //       <MainStack.Screen name="Home" component={Home} />
    //     </MainStack.Navigator>
    //     <StatusBar style="auto" />
    //   </NavigationContainer>
    // </View>
    <Provider store={store}>
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});