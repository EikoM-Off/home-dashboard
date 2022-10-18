<template>
  <Card class="shadow-5">
    <template #header>

    </template>
    <template #title>
      <div class="flex flex-row justify-content-between align-items-center">
        <i class="pi pi-hashtag text-xl" />
        Посты
        <Button
            icon="pi pi-plus"
            :class="['p-button-sm p-button-secondary p-button-rounded align-self-center', {'animate__animated animate__rubberBand animate__delay-1s' : !shopToDoLists}]"
            v-tooltip.left="'Создать новый пост'"
            @click="{}"
            @contextmenu.prevent="$event.target.hover()"
        />
      </div>
    </template>
    <template #content>
      <div class="grid">
        <div
            v-for="(post, index) in posts"
            :key="'post' + index"
            class="col-12 md:col-6 lg:col-6"
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
