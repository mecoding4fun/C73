import React from 'react';
import { /*StyleSheet*/ Text, View,Image } from 'react-native';
import {createAppContainer,createSwitchNavigator}from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadScreen from './Screens/ReadScreen';
import WriteScreen from './Screens/WriteScreen';
import LoginScreen from './Screens/loginScreen';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
  );
}
}

const Tabs = createBottomTabNavigator({
Read:{screen: ReadScreen},
Write:{screen: WriteScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName = navigation.state.routeName;
      if(routeName === 'Read'){
        return(
          <Image source={require('./assets/Readlogo.png')}
          style={{width:40,height:40}}/>
          )
        }
        else if(routeName === 'Write'){
          return(
            <Image source={require('./assets/Writelogo.png')}
            style={{width:40,height:40}}/>
            )
          }
        }
      })
    })
    const SwitchNavigator = createSwitchNavigator({
      LoginScreen:{screen:LoginScreen},
      TabNavigator:{screen:Tabs}
    })
    const AppContainer = createAppContainer(SwitchNavigator);    
    
    
    