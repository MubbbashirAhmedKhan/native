
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Home from '../screens/Home';

 import About from '../screens/About';
import Login from '../screens/Login';
import Register from '../screens/Register'


const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen  options={{
          headerShown: false
        }} name="Register" component={Register} />
        <Stack.Screen options={{
          headerShown: false
        }} name="Login" component={Login} />
      
           <Stack.Screen  
         name="Home" component={Home} />
         <Stack.Screen  options={{
          headerShown: false
        }} 
         name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;