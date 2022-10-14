<template>
  <Card class="shadow-5">
    <template #header>

    </template>
    <template #title>
      Посты
    </template>
    <template #content>
      <div class="grid">
        <div
            v-for="(post, index) in posts"
            :key="'post' + index"
            class="col-12 md:col-6 lg:col-4"
        >
          <PostCard :post="post" />
        </div>
      </div>
    </template>
    <template #footer>

    </template>
  </Card>
</template>

<script>
import PostCard from '@/components/MainPageComponents/Posts/PostCard'
import { mapGetters } from 'vuex'
export default {
  name: 'PostsViewComponent',
  computed: {
    ...mapGetters({
      posts: 'getPosts'
    })
  },
  components: { PostCard }
}
</script>

<style scoped>

</style>
