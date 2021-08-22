import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Icon, Badge } from 'react-native-elements';
import firebase from 'firebase';

class MyHeader extends Component
{
    constructor (props)
    {
        super(props);
        this.state =
        {
            userID: firebase.auth().currentUser.email,
            value: '',
        };
    }

    render ()
    {
        return (
            <Header leftComponent=
                {
                    <Icon name='bars' type='font-awesome' color='#ffffff' onPress={ () => this.props.navigation.toggleDrawer() } />
                } centerComponent=
                {
                    {
                        text: this.props.title,
                        style: { fontSize: 20, fontWeight: 'bold', color: '#ffffff' }
                    }
                }
                backgroundColor='blue'
            />
        );
    }
}

export default MyHeader;
