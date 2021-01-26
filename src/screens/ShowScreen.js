import React, { useContext }from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';


const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

    return <>
        <View style={styles.viewStyle}>
            <View style={styles.box}>
                <Text style={styles.title}>{blogPost.title}</Text>
                <Text style={styles.content}>{blogPost.content}</Text>
                <Text style={styles.dateStyle}>{blogPost.date}</Text>
            </View>
        </View>
        <TouchableOpacity 
            style={styles.button} 
            onPress={() => 
                navigation.navigate('Edit', {id: blogPost.id})
            }>
            <Feather name="edit" size={26} color="white" />
        </TouchableOpacity>

    </>
}


const styles = StyleSheet.create({
    button: {
        alignItems:'center',
        justifyContent:'center',
        width:65,
        position: 'absolute',                                          
        bottom: 25,                                                    
        right: 25,
        height:65,
        backgroundColor:'#00AAEE',
        borderRadius:100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 7,
    },
    viewStyle: {
        backgroundColor: "white",
        padding: 20,
        ...StyleSheet.absoluteFillObject
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom:20
    },
    content : {
        fontSize: 18,
        marginBottom: 50
    },
    box: {
        borderColor: 'grey',
        borderRadius: 10,
        padding: 10,
        borderWidth: 2,
    },
    dateStyle: {
        fontSize: 12,
        position: 'absolute',
        color: 'grey',
        right: 10,
        bottom: 10,
    }
})

export default ShowScreen;