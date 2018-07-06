<template>
  <div class="home">
  <Header />
  <section class="intro">
    <h1>Get the latest news!</h1>
  </section>
  <section class="featured-posts">
    <PostPreview id="1" thumbnail="https://www.thoughtco.com/thmb/DF3Q0T5_0O5CmGBTCWCBTcyGgmw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/JavaScript-58acbb8a3df78c345bad32c2.jpg" title="hello there" previewText="this is my preview text..." />
    <PostPreview id="2" thumbnail="https://www.thoughtco.com/thmb/DF3Q0T5_0O5CmGBTCWCBTcyGgmw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/JavaScript-58acbb8a3df78c345bad32c2.jpg" title="hello there second time" previewText="this is my 2 preview text..." />
    <PostPreview id="3" thumbnail="https://www.thoughtco.com/thmb/DF3Q0T5_0O5CmGBTCWCBTcyGgmw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/JavaScript-58acbb8a3df78c345bad32c2.jpg" title="hello there third time" previewText="this is my 3 preview text..." />
  </section>
  </div>
</template>

<script>
  import PostPreview from '@/components/Posts/PostPreview';
  export default {
    components: {
      PostPreview
    }
  }
</script>


<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}


</style>
