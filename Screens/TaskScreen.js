import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import firebase from 'firebase';
import db from '../config';

class TaskScreen extends Component
{
  constructor (props)
  {
    super(props);
    // console.log(this.props.navigation.getParam("selectedDate"));
    this.state =
    {
      userID: firebase.auth().currentUser.email,
      taskID: this.generateRandomID(),
      subjectName: '',
      description: '',
      duration: '',
      date: this.props.navigation.getParam("selectedDate"),
    };
  }

  componentDidMount ()
  {
    // this.addTask();
  }

  generateRandomID = () =>
  {
    return Math.random().toString(36).substring(7);
  };

  addTask = () =>
  {
    var userID = this.state.userID;

    db.collection('tasks').add(
      {
        userID: userID,
        subjectName: this.state.subjectName,
        description: this.state.description,
        duration: this.state.duration,
        date: this.state.date,
        taskID: this.state.taskID,
      });

    alert("Data added to collection Successfully");
  };

  render ()
  {
    return (
      <View>
        {/* Text Inputs */ }
        <TextInput
          placeholder={ "subjectName" } maxLength={ 20 } style={ styles.formTextInput } onChangeText={ text =>
          {
            this.setState(
              {
                subjectName: text
              });
          } }
        />
        <TextInput
          placeholder={ "description" } multiline={ true } style={ styles.formTextInput } onChangeText={ text =>
          {
            this.setState(
              {
                description: text
              });
          } }
        />
        <TextInput
          placeholder={ "Duration" } style={ styles.formTextInput } onChangeText={ text =>
          {
            this.setState(
              {
                duration: text
              });
          } }
        />
        <Text style={ styles.formTextInput }> Selected Date: { this.state.date } </Text>

        {/* Button which will assign the state variables values to firebase */ }
        <View style={ { flex: 1, alignItems: 'center' } } >
          <TouchableOpacity style={ styles.button } onPress={ () => { this.addTask(); } } >
            <Text style={ { color: '#ffffff', fontSize: 18, fontWeight: 'bold' } } >
              AddTask
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TaskScreen;

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formTextInput: {
      width: '75%',
      height: 35,
      alignSelf: 'center',
      borderColor: '#ffab91',
      borderRadius: 10,
      borderWidth: 1,
      marginTop: 20,
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
