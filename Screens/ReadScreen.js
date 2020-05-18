import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../config'


export default class ReadScreen extends React.Component{
    constructor(){
    super();
    this.state = {
        search: '',
        dataSource:'',
      };
    }
    
      

        retrieveStories = async()=>{
            const query = await db.collection("Stories").get()
            query.docs.map((doc)=>{
                this.setState({
                    dataSource:[doc.data()]
                })
                console.log(doc.data)
            })
        }
    
    


    render(){
        if(this.state.search !== ''){
            this.retrieveStories();
        }
        return(
            <ScrollView>
            <SearchBar
            placeholder="Search Here..."
            onChangeText={(text)=>{
                this.setState({search:text})
            }}
            value={this.state.search}
            style={{marginTop:15}}
            />
        {this.state.dataSource.map((data,index)=>{           
                return(
        <View key={index} style={{borderBottomWidth:2}}>
            <Text>{"Title: " + data.Title}</Text>
            <Text>{"Author: " + data.Author}</Text>
        </View>
            )
         })}
            </ScrollView>
        );
    }
}
