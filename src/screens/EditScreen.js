import React, { useContext } from 'react';
import { View, StyleSheet, Image} from 'react-native';
import { Context } from '../context/BlogContext'
import BlogPostForm from '../../src/components/BlogPostForm'

let id;

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))
 

    return (
        <View style={styles.view}>   
            <Image
                style={styles.image}
                source={require('../../assets/add.png')}
             />
            <BlogPostForm 
                  onSubmit={(title, content) => {
                      editBlogPost(blogPost.id, title, content, blogPost.date, () =>  navigation.pop());
                  }}
                  initialValues={{title: blogPost.title, content: blogPost.content}}
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
    }
})

export default EditScreen; 