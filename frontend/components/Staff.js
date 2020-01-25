import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Note from './Note';
import { render } from 'react-dom';


const Staff = props => {
    const [notesList, setNotesList] = useState([]);

    let width, height;

    // const noteInputHandler = object => {
    //     return;
    // }

    const addNoteHandler = (x, y) => {
        setNotesList([...notesList, { x, y, id: Math.random() }]);
        // console.log(notesList);
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onLayout={event => {
                    width, height = event.nativeEvent
                    console.log(width, height);
                }}
                onPress={event => {
                    // console.log(event);
                    // console.log(event.nativeEvent.locationX, event.nativeEvent.locationY);
                    // console.log(event.nativeEvent.pageX, event.nativeEvent.pageY)
                    addNoteHandler(event.nativeEvent.locationX, event.nativeEvent.locationY)
                }}>
                <View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    {notesList.map(note => <Note note={note} />)}
                </View>
            </TouchableWithoutFeedback>
        </View >
    );
};

export default Staff;

const styles = StyleSheet.create({
    container: {
        height: 96,
        width: '90%',
        backgroundColor: 'gray',
        overflow: "visible",
        // flexDirection: ,
        // alignItems: 'center',
        // justifyContent: 'center',
        // flex: 1
    },
    line: {
        height: 24,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderTopColor: 'black',
        borderTopWidth: 1
    },
});

