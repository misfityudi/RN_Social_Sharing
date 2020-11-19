import React from 'react'
import { View, StyleSheet } from 'react-native'
import FacebookSharing from './FacebookSharing';
import OtherSharing from './OtherSharing';

const SocialSharing = (props) => {
    return(
        <View style={styles.container}>
            <FacebookSharing/>
            <OtherSharing/>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#000',
        width: 50,
        height: 50
    }
})

export default SocialSharing;