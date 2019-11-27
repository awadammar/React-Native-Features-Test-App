import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, Vibration, Clipboard } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import DeviceInfo from 'react-native-device-info';

export default class Others extends Component {
    state = {
        location: null
    };

    info = () => {
        return "Application Name " + DeviceInfo.getApplicationName() +
            "\n Device Model " + DeviceInfo.getModel();
    }

    vibrate = () => {
        const DURATION = 1000;
        Vibration.vibrate(DURATION);
    }

    findCoordinates = () => {
        Geolocation.getCurrentPosition(
            position => {
                const location = JSON.stringify(position);

                this.setState({ location });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this.vibrate()}
                    title="Vibrate">
                </Button>

                <Button
                    onPress={() => alert(this.info())}
                    title="Get Device Info">
                </Button>

                <TouchableOpacity onPress={this.findCoordinates}>
                    <Text style={styles.welcome}>Find My Coords? Click Me</Text>
                    <Text>Location: {this.state.location}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Clipboard.setString('mail@mail.com')}>
                    <Text style={{ color: 'red', fontSize: 14, fontFamily: 'Arial', fontStyle: 'bold', textAlign: 'center', marginTop: 3, marginLeft: 25, marginBottom: 17 }}>
                        mail@mail.com
                    </Text>
                </TouchableOpacity>
                <Text> Touch the above text to copy it</Text>
            </View>
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
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }

});
