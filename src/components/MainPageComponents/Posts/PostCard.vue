<template>
  <Card class="shadow-1">
    <template #header>
    </template>
    <template #title>
      {{ post.title }}
    </template>
    <template #content>
      <div class="h-20rem overflow-y-auto">
        {{ post.content }}
      </div>
    </template>
    <template #footer>
      <div class="flex flex-row justify-content-end">
        <span>{{ post.author }}</span>
        <span>{{ post.date }}</span>
      </div>
    </template>
  </Card>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: Object
  }
}
</script>

<style scoped>

</style>
