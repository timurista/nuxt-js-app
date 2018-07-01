<template>
  <section class="container">
    <h2 class="title">Generic Product</h2>
    <ul class="links">
      <li>
        <nuxt-link to="/users">Users</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/products">Products</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
  background-color: #ededed;
  width: 100%;
  padding: 16px 0;

}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding: 16px 0 0;
}
li {
  list-style: none;
  padding: 16px;
}

li > a {
  color: #666;
  font-weight: 600;
  text-decoration: none;
  font-size: 24px;
}
li > a:hover {
  opacity: .6;
}
</style>
