import React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native'

const Note = props => {
    console.log(props)

    return (
        <View style={[{}]} key={props.note.id}>
            {/* <Text>{props.note.x || 'O'}</Text>
            <Text>{props.note.y || 'O'}</Text> */}
            <Text>O</Text>
        </View>
    );
};

export default Note;

const styles = StyleSheet.create({

});

