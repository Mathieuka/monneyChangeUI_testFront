//React
import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground} from 'react-native';
//React native base
import { Item, Input,Button, Form, Content } from 'native-base';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { giveChange_} from '../../redux/actions';



class Change extends Component{

  constructor(props){
    super(props)   
    this.state = {amount: '', noMoney : false};
  }

 
  componentWillMount(){
    if(this.state.noMoney === true){
        this.props.navigation.navigate('CanNotChange')
    }
  }

  giveChange(amount){
    this.props.giveChange_(amount);
  }

  noMoney(){
    if(this.props.giveChange[0]){
        if(this.props.giveChange[0].noMoney === null){
            this.props.navigation.navigate('CanNotChange')
        }
     }
  }
  
  render() {

    
    this.noMoney()
     
    return (
        <ImageBackground
        source={require("../../../asset/bart.jpg")}
        style={styles.container}
        style={{flex:1}}>
        
        <Content>
                <Form>
                        <Item style={{marginTop:100,marginBottom:20,marginLeft:80, marginRight:80, backgroundColor:'#8bdb53'}}  rounded>
                            <Input keyboardType="numeric" onChangeText={(value)=>this.setState({amount : value})}  placeholder='amount'/>
                        </Item>
                        <Button onPress={()=>this.giveChange(this.state.amount)} block info> 
                            <Text>Change !</Text>
                        </Button>
                        <Item style={{marginTop:55,marginBottom:20,marginLeft:80, marginRight:80, backgroundColor:'#8bdb53'}}  rounded>
                        <Text>$10 bills X { this.props.giveChange[0] ? this.props.giveChange[0].ten : 0}</Text>
                        </Item>
                        <Item style={{marginTop:20,marginBottom:20,marginLeft:80, marginRight:80, backgroundColor:'#8bdb53'}}  rounded>
                        <Text>$5 bills X {this.props.giveChange[0] ? this.props.giveChange[0].five : 0}</Text>
                        </Item>
                        <Item style={{marginTop:20,marginBottom:20,marginLeft:80, marginRight:80, backgroundColor:'#8bdb53'}}  rounded>
                        <Text>$2 coins X {this.props.giveChange[0] ? this.props.giveChange[0].two : 0}</Text>
                        </Item>
                </Form>
                
          </Content>
        
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

function mapDispatchToprops(dispatch){
    return bindActionCreators({ giveChange_ },dispatch);
}

function mapStateToProps(state){
    return{
        giveChange : state.giveChange
    }
}


export default connect(mapStateToProps,mapDispatchToprops)(Change);
