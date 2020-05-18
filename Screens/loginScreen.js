import React from 'react';
import {View,TextInput,TouchableOpacity,Text,Image,StyleSheet,KeyboardAvoidingView, Alert} from 'react-native';

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            emailId:'',
            password:'',
        }
        
    }
    login = async(email,password)=>{
        if(email && password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword()
                if(response){
                    this.props.navigation.navigate('Read')
                }
            }
            catch(error){
                switch (error.code){
                    case 'auth/user-not-found':
                    alert("User Doesn't exist")
                    console.log("Enter valid email")

                    break;
                    case'auth/invalid-email':
                    alert("incorrect email or password")
                    console.log('invalid')
                }
                
            }
        }
        else{
            alert('enter email and password')
        }
    }
    render(){
        return(
    <KeyboardAvoidingView style = {{/*alignItems:'center',*/marginTop:20}}>
        <View>
            <Image source={require("../assets/bedtime-logo.png")} style = {{width:200,height:200}}/>
    <Text style = {{textAlign:'center',fontSize:30}}>Bedtime-Stories</Text>
    </View>
    <View>
        <TextInput style = {styles.loginBox}
        placeholder = "abc@example.com"
        keyboardType = 'email-address'
        onChangeText  = {(text)=>{
            this.setState({emailId:text})
        }}
        />
        <TextInput style = {styles.loginBox}
        placeholder = "Enter Password"
        secureTextEntry = {true}
        onChangeText  = {(text)=>{
            this.setState({password:text})
        }}
        />
        
        </View>
        <View>
            <TouchableOpacity style={{
                        width:90,height:30,borderWidth:1,borderRadius:7,marginTop:20,paddingTop:5}}
                        onPress = {()=>{this.props.navigation.navigate('Write')}}><Text>Login</Text>
                        </TouchableOpacity>
            </View>

    </KeyboardAvoidingView>
        )
}}

const styles = StyleSheet.create({
    loginBox:{
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10
    }
})