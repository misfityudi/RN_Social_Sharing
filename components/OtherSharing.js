import React from 'react'
import {  TouchableOpacity, Image, StyleSheet } from 'react-native'

const OtherSharing = (props) => {
    const onPressHandler = ()  => {
        
    }
    return (
        <TouchableOpacity onPress={onPressHandler} style={styles.container}>
            <Image source={require('../assets/share-24.png')} style={styles.icon}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        //backgroundColor: '#000'
        padding: 5,
    },
    icon:{
        width: 24,
        height: 24,
    }
})

export default OtherSharing;
