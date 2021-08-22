import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Welcome from './Screens/Welcome';
import HomeScreen from './Screens/HomeScreen';
import CalenderScreen from './Screens/Calender';
import TaskScreen from './Screens/TaskScreen';
import { AppTabNavigator } from './Components/BottomTabNavigator';
import { AppDrawerNavigator } from './Components/AppDrawerNavigator';

export default function App ()
{
  return (
    <AppContainer />
  );
}

const switchNavigator = createSwitchNavigator({
  Welcome:
  {
    screen: Welcome
  },
  AppDrawerNavigator:
  {
    screen: AppDrawerNavigator
  },
  AppTabNavigator:
  {
    screen: AppTabNavigator
  }
});

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
