import createDataContext from './createDataContext'
import moment from 'moment';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch (action.type){
        case 'get_blogposts': 
            return action.payload;
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'edit_blogPost':
            return state.map((blogPost) => {
                if(blogPost.id === action.payload.id) {
                    return action.payload
                } else {
                    return blogPost;
                }
            })
        default:
            return state;
    }
}

const getBlogPosts = dispatch => {
    return async () => {
       const response = await jsonServer.get('/blogposts');
       dispatch( { type: 'get_blogposts', payload: response.data})
       return true;
    }
}

const addBlogPost = (dispatch) => {
    moment.locale('fr');
    var date = moment().format('lll')
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', {title: title, content: content, date: date})
        if (callback){
            callback();
        }
    }
}
const deleteBlogPost = dispatch => { 
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type: 'delete_blogpost', payload: id})
    }
}

const editBlogPost = dispatch => {
    return async (id, title, content, date, callback) => {
        await jsonServer.put(`blogposts/${id}`, {title: title, content: content, date: date})
        dispatch({ type:'edit_blogPost', payload: {
            id: id,
            title: title,
            content: content,
            date: date
        }});
        callback();
    }
} 


export const {Context, Provider} = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, 
    []
);