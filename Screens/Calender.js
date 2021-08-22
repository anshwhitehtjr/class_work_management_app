import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Calendar from 'react-native-calendar';
import MyHeader from '../Components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

class CalenderScreen extends Component
{
    constructor ()
    {
        super();
        this.state =
        {
            selectedDate: '',
        };
    }

    render ()
    {
        return (
            <SafeAreaProvider>
                <View>
                    <MyHeader title='Calender Screen' navigation={ this.props.navigation } />
                    <Calendar
                        current={ '2021-15-8' }
                        minDate={ '2000-01-01' }
                        maxDate={ '2021-30-8' }
                        onDateSelect={ date =>
                        {
                            console.log("selected date is ", date.toString().slice(0, 10));
                            this.setState(
                                {
                                    selectedDate: date.toString().slice(0, 10),
                                }
                            );
                        }
                        }
                    />
                    { this.state.selectedDate === "" ? (
                        <View style={ styles.formTextInput }>
                            <Text style={ { alignSelf: 'center', fontWeight: 'bold', fontSize: 20 } }>Please select a date to continue</Text>
                        </View>
                    ) : (
                        <TouchableOpacity style={ styles.formTextInput } onPress={ () => this.props.navigation.navigate("TaskScreen", { selectedDate: this.state.selectedDate }) } >
                            <Text style={ { alignSelf: 'center', fontWeight: 'bold', fontSize: 20 } }>Click To Add A Task</Text>
                        </TouchableOpacity>
                    ) }
                </View>
            </SafeAreaProvider>
        );
    };
}

export default CalenderScreen;

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        formTextInput: {
            width: '25%',
            height: 50,
            alignSelf: 'center',
            borderColor: '#ffab91',
            borderRadius: 20,
            borderWidth: 1,
            margin: 20,
            padding: 10,
        },
        ButtonBox: {
            width: 300,
            height: 35,
            borderBottomWidth: 1.5,
            borderColor: '#ffab91',
            fontSize: 20,
            marginBottom: 20,
            marginTop: 5,
        },
        button:
        {
            width: '75%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            backgroundColor: '#f7ab91',
            elevation: 10,
            marginTop: 50,
        },
        buttonContainer: {
            flex: 1,
        },
    });
