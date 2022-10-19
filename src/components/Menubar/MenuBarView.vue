<template>
 <div>
   <Toolbar>
     <template #start>
       <Button icon="pi pi-bars" @click="isVisibleSidebar = !isVisibleSidebar" class="p-button-text p-button-rounded"/>
     </template>

     <template #end>
      <AvatarComponent />
     </template>
   </Toolbar>

   <Sidebar v-model:visible="isVisibleSidebar">
     <SidebarContent />
   </Sidebar>
 </div>
</template>

<script>
import Sidebar from 'primevue/sidebar'
import Toolbar from 'primevue/toolbar'
import AvatarComponent from '@/components/Menubar/AvatarComponent'
import SidebarContent from '@/components/Menubar/Sidebar/SidebarContent'

export default {
  name: 'MenuBarView',
  data: () => ({
    isVisibleSidebar: false
  }),
  components: {
    SidebarContent,
    AvatarComponent,
    Sidebar,
    Toolbar
  }
}
</script>

<style scoped>

</style>
