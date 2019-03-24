//React
import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground} from 'react-native';


class Splash extends Component{

  constructor(props){
    super(props)   
  }

  componentDidMount(){ 
    setTimeout(
      () => {
        this.props.navigation.navigate('Change')
      }, 2000);
  }

  
  render() {
    return (
        <ImageBackground
        source={require("../../../asset/omer.jpg")}
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
  title : {
    fontSize: 32,
  }
});

export default Splash;
