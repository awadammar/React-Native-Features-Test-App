//import needed libraries
import React from 'react';
import { AppRegistry, ScrollView, View } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Header from './app/header'
import Fibonacci from './app/fib';
// import Camera from './app/camera';
import Others from './app/others';
import SensorView from './app/sensors';

const axis = ["x", "y", "z"];

const availableSensors = {
  accelerometer: axis,
  gyroscope: axis,
  magnetometer: axis,
  barometer: ["pressure"]
};
const viewComponents = Object.entries(availableSensors).map(([name, values]) =>
  SensorView(name, values)
);

//create component
const Sample = () => {
  return (
    <ScrollView>
      <Header></Header>
      <Fibonacci></Fibonacci>    
      {/* <Camera></Camera> */}
      <Others></Others>
      {/* {viewComponents.map((Comp, index) => <Comp key={index} />)} */}
    </ScrollView>
  );
}


//rendering on the device 
AppRegistry.registerComponent(appName, () => Sample);

