import React from 'react';

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home'
import Historial from './screens/Historial'
import Cep from './screens/Cep'

const AppStack = createStackNavigator();;

const App = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator headerMode='none' initialRouteName='Home'>
        <AppStack.Screen name='Home' component={Home} />
        <AppStack.Screen name='Cep' component={Cep} />
        <AppStack.Screen name='Historial' component={Historial} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default App
