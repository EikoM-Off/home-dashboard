<template>
  <div class="m-0 grid lg:pl-8 lg:pr-8">
    <div class="col-12 md:col-8 lg:col-8">
      <Skeleton class="w-12 h-20rem"/>
    </div>
    <div class="col-12 md:col-4 lg:col-4">
      <ShopToDoListComponent />
    </div>
  </div>
</template>

<script>
import ShopToDoListComponent from '@/components/ShopToDoList/ShopToDoListComponent'
import Skeleton from 'primevue/skeleton'
export default {
  name: 'MainPage',
  components: {
    ShopToDoListComponent,
    Skeleton
  }
}
</script>

<style scoped>

</style>
