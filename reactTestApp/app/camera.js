import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';

export default class Camera extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text> React Camera</Text>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={{
                        flex: 1,
                        width: '100%',
                    }}
                >
                </RNCamera>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
    TextInputStyle: {
        textAlign: 'center',
        height: 40,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#009688',
        marginBottom: 10
    }
});
