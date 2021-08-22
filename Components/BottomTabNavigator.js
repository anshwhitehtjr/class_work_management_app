import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import CalenderScreen from '../Screens/Calender';
import TaskScreen from '../Screens/TaskScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export const AppTabNavigator = createBottomTabNavigator({
    CalenderScreen: {
        screen: CalenderScreen,
        navigationOptions: {
            tabBarIcon: <Image source={ require("../assets/favicon.png") } style={ { width: 20, height: 20 } } />,
            tabBarLabel: "Calendar",
        }
    },
    TaskScreen: {
        screen: TaskScreen,
        navigationOptions: {
            tabBarIcon: <Image source={ require("../assets/favicon.png") } style={ { width: 20, height: 20 } } />,
            tabBarLabel: "Maintain Tasks",
        }
    }
});
