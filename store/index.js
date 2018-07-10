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
      }
    },
    actions: {
      nuxtServerInit(vueContext, context) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              vueContext.commit('setPosts', loadedPosts)
              resolve();
            }, 500)
          })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
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
