import React from 'react';
import {Text,View,TextInput,StyleSheet,TouchableOpacity,Alert, KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';


export default class WriteScreen extends React.Component{
    constructor(){
        super();
        this.state={
            writtenStory: '',
            writtenTitle:'',
            writtenAuthor:'',
        }
        }

        submitStory = async ()=>{
            db.collection("WrittenStory").doc("aly6WkmL8TrtCmafLVH2").set({
              'Story' : this.state.writtenStory,
              'date'   : firebase.firestore.Timestamp.now().toDate(),
              'Author': this.state.writtenAuthor,
              'Title':this.state.writtenTitle
            })     
            this.setState({
            writtenStory:'',
            writtenTitle:'',
            writtenAuthor:'',
            })
            alert("Succesfully updated the story!");
          }


    render(){
        return(
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <TextInput
                editable
                maxLength={70}
                multiline
                onChangeText = {(text)=>{
                    this.setState({writtenTitle:text});
                  }}
                numberOfLines={4}
                value={this.state.writtenTitle}
                selectionColor = '#0000f0'
                placeholder="Title"
                style={styles.inputBox2}
            />
            <TextInput
                editable
                maxLength={70}
                multiline
                onChangeText = {(text)=>{
                    this.setState({writtenAuthor:text});
                  }}
                numberOfLines={4}
                value={this.state.writtenAuthor}
                selectionColor = '#0000f0'
                placeholder="Author Name"
                style={styles.inputBox2}
            />
            <TextInput
                editable
                maxLength={200}
                multiline
                onChangeText = {(text)=>{
                    this.setState({writtenStory:text});
                  }}
                value={this.state.writtenStory}
                numberOfLines={4}
                selectionColor = '#0000f0'
                placeholder="Story"
                style={styles.inputBox}
            />
            <TouchableOpacity style={styles.submitButton} onPress={()=>{
                this.submitStory();
              }}>
                <Text style={styles.letButton}>Submit</Text>
                </TouchableOpacity>
            <Text>Write your Story</Text>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      },
    inputBox:{
        width:"90%",
        height:"60%",
        borderWidth: 2,
      },
      inputBox2:{
        width:"90%",
        height:40,
        borderWidth: 2,
      },
    submitButton:{
        width:"50%",
        height:55,
        margin:10,
        padding:10,
        alignItems:'center',
    },
    letButton:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
    }
})