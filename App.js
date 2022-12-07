import React,{Component}from "react"
import{StyleSheet,View,TextInput,Text}from "react-native"

export default class MyProject extends Component{
  constructor(){
    super()
    this.state={
      TextValue:""
    }
  }

  GetValueFunction=(ValueHolder)=>{
    var Value=ValueHolder.length.toString()
    this.setState({TextValue:Value})
  }

  render(){
    return(
      <View style={styles.MainContainer}>
      <Text style={styles.TextStyle}>
      { this.state.TextValue}
      </Text>
      <Text>{this.setState}</Text>

      <TextInput
      placeholder="Enter Text Here"
      onChangeText={ ValueHolder=> this.GetValueFunction(ValueHolder)}/>
      </View>
    )
  }
}

const styles=StyleSheet.create(
  {
    MainContainer:{
      justifyContent:"center",
      alignItems:"center",
      flex:1,
      margin:10,
    },

    TextStyle:{
      textAlign:"center",
      fontSize:25,
    }
  }
)