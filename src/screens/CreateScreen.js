import React, { useContext } from 'react';
import {  View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../../src/components/BlogPostForm'

const CreateScreen = ({ navigation }) => {
    
    const { addBlogPost } = useContext(Context);

    return (
        <View style={styles.view}>
            <Image
                style={styles.image}
                source={require('../../assets/add.png')}
            />
            <BlogPostForm 
                onSubmit={(title, content) => {
                addBlogPost(title, content, () => navigation.navigate('Index'))
                }
            } initialValues={{title: '', content: ''}}
            />            
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#fff',
        ...StyleSheet.absoluteFillObject
    },
    image: {
        width: 320,
        height: 260,
        alignSelf: 'center'
    },
  

})

export default CreateScreen; 