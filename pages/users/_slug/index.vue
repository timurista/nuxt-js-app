<template>
  <div>
    <h1>Single User view by slug</h1>
    <h2>SLUG: {{ $route.params.slug }}</h2>
  </div>
</template>

<script>
export default {
  validate(data) {
    return /^[-a-z0-9]+$/.test(data.params.slug);
  }
}
</script>

