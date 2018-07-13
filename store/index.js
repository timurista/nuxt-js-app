import Vuex from 'vuex';
import axios from 'axios';
import { loadedPosts } from '~/mocks/post-data'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        console.log('EDIT POST MUTATION', editedPost, state.loadedPosts.map(x => x.id))
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      nuxtServerInit(vueContext, context) {
        return axios.get(`${process.env.FIREBASE_DB}/posts.json`)
          .then(res => {
            const postsArray = [];
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key })
            }
            vueContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      addPost(vuexContext, post) {
        const createdPost = {...post, updatedDate: new Date() }
        return axios.post(`${process.env.FIREBASE_DB}/posts.json`, createdPost)
          .then((res) => {
            vuexContext.commit('addPost', { ...createdPost, id: res.data.name })
          })
          .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return axios.put(`${process.env.FIREBASE_DB}/posts/${editedPost.id}.json`, editedPost)
        .then(res => {
          console.log('EDITED POST', editedPost)
          vuexContext.commit('editPost', editedPost);
        })
        .catch(e => console.log(e))
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
