import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class HomeScreen extends Component
{
    componentDidMount ()
    {
        console.log("In the Home Screen");
    }

    render ()
    {
        return (
            <View>
                <Text> HomeScreen </Text>
                <TouchableOpacity onPress={ this.props.navigation.navigate("AppTabNavigator") } >
                    <Text> GO TO CALENDAR </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeScreen;
