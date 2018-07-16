<template>
  <div>
    <h2>Slug</h2>
    <input
      v-model="userSlug"
      type="text" >
    <button @click="onLoadUser">Load User</button>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userSlug: ''
    }
  },
  methods: {
    onLoadUser() {
      this.$router.push('/users/'+this.userSlug)
    }
  },
  layout: 'users'
}
</script>
