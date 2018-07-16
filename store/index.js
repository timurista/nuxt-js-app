import Vuex from 'vuex';
import { loadedPosts } from '~/mocks/post-data'
import Cookie from 'js-cookie'

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
          const expiresInMillis = res.expiresIn * 1000;
          const tokenExpirationTime = new Date().getTime() + expiresInMillis
          vuexContext.commit('setAuthToken', res.idToken)
          localStorage.setItem('token')
          localStorage.setItem('tokenExpiration', tokenExpirationTime)
          Cookie.set('jwt', res.idToken)
          Cookie.set('expirtationDate', tokenExpirationTime)
          vuexContext.dispatch('setLogoutTimer', expiresInMillis)
        })
        .catch(e => console.error(e));
      },
      setLogoutTime(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearAuthToken')
        }, duration);
      },
      initAuth(vueContext, req) {
        let token;
        let expirationDate;
        if (req) {
          if(!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('jwt='));
          if (!jwtCookie) return;
          token = jwtCookie.split('=')[1];

          expirationDate = req.headers.cookie
          .split(';')
          .find(c => c.trim().startsWith('expirationDate='))
          .split('=')[1];

        } else {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpiration')
          if (new Date().getTime() > +expirationDate || !token) {
            return;
          }
        }

        vuexContext.commit('setLogoutTimer', +expirationDate - new Date().getTime())
        vuexContext.commit('setAuthToken', token);
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
