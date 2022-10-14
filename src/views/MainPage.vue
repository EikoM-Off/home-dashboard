<template>
  <div class="m-0 grid lg:pl-8 lg:pr-8">
    <div class="col-12 md:col-4 lg:col-4">
      <ShopToDoListComponent />
    </div>
    <div class="col-12 md:col-8 lg:col-8">
      <PostsViewComponent />
    </div>
  </div>
</template>

<script>
import ShopToDoListComponent from '@/components/MainPageComponents/ShopToDoList/ShopToDoListComponent'
import PostsViewComponent from '@/components/MainPageComponents/Posts/PostsViewComponent'
export default {
  name: 'MainPage',
  components: {
    PostsViewComponent,
    ShopToDoListComponent
  }
}
</script>

<style scoped>

</style>
