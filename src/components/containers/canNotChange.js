//React
import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground} from 'react-native';


class CanNotChange extends Component{

  constructor(props){
    super(props)   
  }

  
  
  render() {
    return (
        <ImageBackground
        source={require("../../../asset/omersad.jpg")}
        style={styles.container}>
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
        </View>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});



export default CanNotChange;
