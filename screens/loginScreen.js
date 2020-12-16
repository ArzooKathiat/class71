import React from 'react';
import { Text,Image, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert, ToastAndroid} from 'react-native';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';


export default class LoginScreen extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView style={{alignItems: 'center' , marginTop: 20}}  >
                
                   <View>
           
              <Image
                source={require("../assets/booklogo.jpg")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>LOGIN SCREEN</Text>
             </View>

            <View >
            <TextInput 
              style={styles.loginBox}
              placeholder="abc@example.com"
              keyboardType='email-address'
              onChangeText ={text => this.setState({
                emailId : text
              })
            }
       
        
               />

            <TextInput 
              style={styles.loginBox}
              secureTextEntry={true}
              placeholder="enter password"
              onChangeText ={text => this.setState({
              password : text
              })
            }
       
        
               />       

<TouchableOpacity style = {{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
                onPress={()=>{this.Login(this.state.emailId , this.state.password)}}>
                    
                <Text style={{textAlign: 'center'}}>  Login  </Text>
                    
                

                </TouchableOpacity>
                </View>

                </KeyboardAvoidingView>

               
        )
    }
} 

const styles = StyleSheet.create({
  loginBox:
  {
    width: 300,
  height: 40,
  borderWidth: 1.5,
  fontSize: 20,
  margin:10,
  paddingLeft:10
  }
})
