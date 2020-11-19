import React, {useState, useEffect} from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Share from 'react-native-share';

const abortController = new AbortController();
const signal = abortController.signal;
const API_Server = 'https://api.v-o-v.io/api/v1/tokens/share-gif/'

const ShareGIF = (props) => {
    const [image_url, setImageURL] = useState('This is test url');

    const fetchSharingDetails = async () => {
        const api_url = `${API_Server}?uid=${props.uid}`
        await fetch(api_url, {signal:signal})
            .then((response) => response.json())
            .then((response) => {
                setImageURL(response.image_url);
            })
            .catch(function (error){
                //
            })
    }

    useEffect(()=>{
        fetchSharingDetails();
    }, [])

    const shareHandler = async () => {
        const shareOptions = {
            url: image_url
        }
        try {
            const ShareResponse = await Share.open(shareOptions);
        } catch (error) {
            // do something
        }
    }
    return(
        <TouchableOpacity onPress={shareHandler} style={styles.container}>
            <Text style={styles.text}>Share GIF</Text>
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

export default ShareGIF;