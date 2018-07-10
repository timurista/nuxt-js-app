<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
  import PostList from '@/components/Posts/PostList';
  import { loadedPosts } from '@/mocks/post-data';

  export default {
    components: {
      PostList
    },
    // fetch(context) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(resolve({ loadedPosts }), 500)
    //   })
    //   .then( data => {
    //     context.store.commit('setPosts', data.loadedPosts)
    //   })
    //   .catch(e => {
    //     context.error(e);
    //   });
    // },
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
    }
  }
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
