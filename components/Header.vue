<template>
  <header class="header">
    <nav>
      <ul class="nav-items">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/users">Users</nuxt-link>
        </li>
      </ul>
    </nav>
    </header>
</template>

<style scoped>

.header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0b0b0b;
}

.nav-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
}

.nav-items > li {
  padding: 16px;
}

.nav-items a {
  color: #fff;
  text-decoration: none;
}

</style>

