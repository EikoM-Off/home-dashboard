<template>
 <div>
   <Sidebar v-model:visible="isVisibleSidebar">
     Content
   </Sidebar>

   <Button icon="pi pi-arrow-right" @click="isVisibleSidebar = !isVisibleSidebar" />
 </div>
</template>

<script>
import Sidebar from 'primevue/sidebar'

export default {
  name: 'MenuBarView',
  data: () => ({
    isVisibleSidebar: false
  }),
  components: {
    Sidebar
  }
}
</script>

<style scoped>

</style>
