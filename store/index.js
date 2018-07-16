import Vuex from 'vuex';
import { loadedPosts } from '~/mocks/post-data'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
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
      },
      setAuthToken(state, token) {
        state.token = token;
      },
      clearAuthToken(state) {
        state.token = null;
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
        return this.$axios.post(`${process.env.baseUrl}/posts.json?auth=${vuexContext.state.token}`, createdPost)
          .then((data) => {
            vuexContext.commit('addPost', { ...createdPost, id: data.name })
          })
          .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return this.$axios.put(`${process.env.baseUrl}/posts/${editedPost.id}.json?auth=${vuexContext.state.token}`, editedPost)
        .then(data => {
          vuexContext.commit('editPost', editedPost);
        })
        .catch(e => console.log(e))
      },
      authenticateUser(vuexContext, authData) {
        const { email, password, isLogin } = authData;

        let authUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.FIREBASE_API_KEY}`

        if (!isLogin) {
          authUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${process.env.FIREBASE_API_KEY}`;
        }

        return this.$axios.$post(authUrl, {
          email,
          password,
          returnSecureToken: true,
        })
        .then(res => {
          vuexContext.commit('setAuthToken', res.idToken)
          vuexContext.dispatch('setLogoutTimer', res.expiresIn * 1000)
        })
        .catch(e => console.error(e));
      },
      setLogoutTime(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearAuthToken')
        }, duration);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return !!state.token
      }
    }
  })
}

export default createStore
