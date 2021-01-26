import React, { useContext, useEffect, useState } from 'react';
import {Text, View, StyleSheet, FlatList, Button, TouchableOpacity, Image} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state,  deleteBlogPost, getBlogPosts} = useContext(Context);
    
    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        };

    }, []);
   
    if (state.length !== 0){
        return (
            <View style={styles.viewStyle}>
                <FlatList 
                    data={state}
                    keyExtractor={(blogPost) => blogPost.content}
                    renderItem={( {item} ) => {
                    return <>
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title.substring(0,18)}</Text>
                                <Text style={styles.dateStyle}>{item.date}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" size={25} color="black" />
                                </TouchableOpacity> 
                            </View>
                        </TouchableOpacity>
                    </>
                    }} 
                />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Create')}>
                    <Feather name="plus" size={30} color="#fff" />
                </TouchableOpacity>
            </ View>
        )
    } else {
        return (
            <View style={styles.emptyView}>
                <Image
                    style={styles.image}
                    source={require('../../assets/empty.png')}
                /> 
                <Text style={styles.titleNo}>No Blogs !</Text> 
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Create')}>
                    <Feather name="plus" size={30} color="#fff" />
                </TouchableOpacity> 

            </View>
        )
    }
     
}


const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "white",
        padding: 5,
        ...StyleSheet.absoluteFillObject
    },
    emptyView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        backgroundColor: '#fff'
    },
    image: {
        width: 320,
        height: 260,
    },
    imageLoading: {
        height: 70,
        width: 70,
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        margin: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10
    },
    title: {
        fontSize: 20,
    },
    titleNo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#444444'
    },
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
    dateStyle: {
       fontSize: 14,
       color: 'grey',
       paddingTop: 5,
       position: 'absolute',
       right: 50,
       top: 20
    }
});

export default IndexScreen;