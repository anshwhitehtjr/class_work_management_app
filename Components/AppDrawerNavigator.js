import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './BottomTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingsScreen from '../Screens/SettingsScreen';
import CalenderScreen from '../Screens/Calender';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: CalenderScreen
    },
    Setting: {
        screen: SettingsScreen
    },
},
    {
        contentComponent: CustomSideBarMenu
    },
    {
        initialRouteName: 'Home'
    });
