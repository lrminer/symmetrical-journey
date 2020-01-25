import React from 'react';

import { StyleSheet } from 'react-native';

const Button = props => {
    return (
        <View style={styles.container}>
            <Text>Welcome to Note search</Text>
        </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})