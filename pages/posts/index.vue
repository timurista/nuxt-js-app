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
    asyncData(context) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve({ loadedPosts }), 500)
      })
      .then( data => data)
      .catch(e => {
        context.error(new Error());
      });
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
