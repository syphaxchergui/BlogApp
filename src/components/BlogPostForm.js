import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
 return (
    <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}
        style={styles.viewStyle}
    >
        <Text style={styles.header}>Enter Title:</Text>
        <TextInput 
            value={title} 
            onChangeText={(text) => setTitle(text)}
            style={styles.textInputTitle}
        />
        <Text style={styles.header}>Enter Content:</Text>
        <TextInput 
            value={content} 
            onChangeText={(text) => setContent(text)}
            style={styles.textInputContent}
            multiline
        />
        <TouchableOpacity style={styles.button} onPress={() => {
            onSubmit(title,content)
        }}>
            <Text style={styles.textButton}>Save blog post</Text>
        </TouchableOpacity> 
    </KeyboardAwareScrollView> 
 )  

}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    header: {
        marginHorizontal: 20,
        fontSize: 20, 
        marginTop: 20,
        fontWeight: 'bold'
    },
    textButton: {
        fontSize: 18,
        color: '#FFF'
    },
    textInputTitle: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        fontSize: 18,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.39,
        shadowRadius: 2,
        elevation: 7,
    },
    textInputContent: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        fontSize: 18,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.39,
        shadowRadius: 2,
        elevation: 7,
    },
    button: {
        alignItems:'center',
        justifyContent:'center', 
        backgroundColor: '#00AAEE',
        borderRadius: 50,
        height:55,
        width:200,
        alignSelf: 'center',
        marginTop: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.39,
        shadowRadius: 2,
        elevation: 7,
        marginBottom: 15,
    }

})

export default BlogPostForm;