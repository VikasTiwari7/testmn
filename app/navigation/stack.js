import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../screen/signup';
import Home from '../screen/home';
const Stack = createStackNavigator();
const MainStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown:true}}/>
           
        </Stack.Navigator>
        );
}
export default MainStack;