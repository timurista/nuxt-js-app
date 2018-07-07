<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">Thumbnail</AppControlInput>

    <AppControlInput
      control-type="textarea"
      v-model="editedPost.content">Content
    </AppControlInput>

    <AppButton type="submit">Save</AppButton>

    <AppButton
      type="submit"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
    >
      Cancel
    </AppButton>
  </form>
</template>

<script>
import AppButton from '@/components/UI/AppButton';
import AppControlInput from '@/components/UI/AppControlInput';

export default {
  props: {
    post: {
      type: Object,
      required: false,
    }
  },
  data() {
    return {
      editedPost: this.post
      ? { ...this.post }
      : {
        author: '',
        title: '',
        thumbnail: '',
        content: '',
      }
    }
  },
  methods: {
    onSave() {
      console.log(this.editedPost)
    },
    onCancel() {
      console.log('nav back')
      this.$router.push('/admin')
    }
  },
  components: {
    AppButton, AppControlInput
  }
}
</script>
