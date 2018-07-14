import Vuex from 'vuex';
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
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      nuxtServerInit(vueContext, context) {
        return context.app.$axios.$get('/posts.json')
          .then(data => {
            const postsArray = [];
            for (const key in data) {
              postsArray.push({ ...data[key], id: key })
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
        return this.$axios.post(`${process.env.baseUrl}/posts.json`, createdPost)
          .then((data) => {
            vuexContext.commit('addPost', { ...createdPost, id: data.name })
          })
          .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return this.$axios.put(`${process.env.baseUrl}/posts/${editedPost.id}.json`, editedPost)
        .then(data => {
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
