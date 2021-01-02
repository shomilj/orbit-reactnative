import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen } from '../screens/AuthStack/AuthScreen'

const AuthStack = createStackNavigator();

export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="AuthScreen">
      <AuthStack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};
