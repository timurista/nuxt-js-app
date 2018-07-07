<template>
  <section class="posts-list">
    <PostPreview id="1" :is-admin="isAdmin" thumbnail="https://www.thoughtco.com/thmb/DF3Q0T5_0O5CmGBTCWCBTcyGgmw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/JavaScript-58acbb8a3df78c345bad32c2.jpg" title="hello there" previewText="this is my preview text..." />
    <PostPreview id="2" :is-admin="isAdmin" thumbnail="https://www.thoughtco.com/thmb/DF3Q0T5_0O5CmGBTCWCBTcyGgmw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/JavaScript-58acbb8a3df78c345bad32c2.jpg" title="hello there second time" previewText="this is my 2 preview text..." />
    <PostPreview id="3" :is-admin="isAdmin" thumbnail="https://www.thoughtco.com/thmb/DF3Q0T5_0O5CmGBTCWCBTcyGgmw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/JavaScript-58acbb8a3df78c345bad32c2.jpg" title="hello there third time" previewText="this is my 3 preview text..." />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview';
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    }
  }
}
</script>


<style scoped>

.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
