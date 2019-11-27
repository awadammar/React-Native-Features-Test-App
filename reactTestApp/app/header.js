import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

//create component
class Header extends Component {

    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>
                    The Ultimate Testing App
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#efefef',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});


export default Header;