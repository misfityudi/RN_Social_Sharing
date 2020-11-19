import React, {useState} from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import ShareGIF from './ShareGIF';
import SharePoetry from './SharePoetry';

const CustomShare = (props) => {
    return(
        <TouchableOpacity style={styles.container}>
            <ShareGIF/>
            <SharePoetry/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 5
    },
    text:{
        fontSize:16,
        fontWeight:'900'
    }
});

export default CustomShare;