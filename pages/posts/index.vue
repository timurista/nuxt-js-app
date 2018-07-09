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
    asyncData(context, cb) {
      setTimeout(cb(null, { loadedPosts }), 500)
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
