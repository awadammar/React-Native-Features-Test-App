import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default class Fibonacci extends Component {

    fibonacci = (n) => {
        var start = new Date().getTime();

        let a = 0, b = 1, f = 1;
        for (let i = 2; i <= n; i++) {
            f = a + b;
            a = b;
            b = f;
        };
        var end = new Date().getTime();
        return [f, end-start];
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Fibonacci Test
                </Text>
                <TextInput
                    placeholder="Enter a Number"
                    underlineColorAndroid='transparent'
                    keyboardType='numeric'
                    maxLength={10}  //setting limit of input
                    onChangeText={(number) => this.setState({ number })}
                    style={styles.TextInputStyle}
                />
                <Button
                    onPress={() => this.handleInput(Number(this.state.number))}
                    title="Enter">
                    Enter
                </Button>
                <Text>

                </Text>
            </View>
        );
    }

    handleInput(e) {
        let [x, y ]= this.fibonacci(e);
        alert("Result = " + x + "\nTime = " + y + " milliseconds."
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
