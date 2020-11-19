import React, {useState} from 'react'
import { TouchableOpacity, Image, StyleSheet, Linking } from 'react-native'

const FacebookSharing = (props) => {
    const [facebookShareURL, setFacebookShareURL] = useState()
    const onPressHandler = ()  => {

    }
    return(
        <TouchableOpacity onPress={onPressHandler} style={styles.container}>
            <Image source={require('../assets/facebook-24.png')} style={styles.icon}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        //backgroundColor: '#000',
        padding: 5,
    },
    icon:{
        width: 24,
        height: 24,
    }
})

export default FacebookSharing;