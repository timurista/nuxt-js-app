<template>
  <div>
    <h2>Slug</h2>
    <input type="text" v-model="userSlug" >
    <button @click="onLoadUser">Load User</button>
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
  }
}
</script>
