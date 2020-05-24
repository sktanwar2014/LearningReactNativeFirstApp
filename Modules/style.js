import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    screen: {
        padding: '50px'
    },
    inputContainer: {
        flex: 1,
        justifyContent:'center', 
        alignItems : 'center',
    },
    input: {
        borderColor: 'black',
        borderWidth : 1,
        padding:10,
        marginBottom : 10,
        width: '80%',
    },
    listItem: {
        padding: '10px',
        borderColor : 'black',
        borderWidth: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection : 'row',        
        justifyContent : 'space-between',
        width : '60%'
    },
    button : {
        width : '40%'
    }
  });
  
  export default styles;