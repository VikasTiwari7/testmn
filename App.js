import React from 'react';
// import MainStack from './src/Navigations/StackNavigation'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './app/navigation/stack';
const App =()=>{
  return(
   <NavigationContainer>
     <MainStack></MainStack>
   </NavigationContainer>
  )
}
export default App;