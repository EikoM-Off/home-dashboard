<template>
  <div>
    <Toolbar>
      <template #start>
        <Button
          icon="pi pi-bars"
          class="p-button-text p-button-rounded"
          @click="isVisibleSidebar = !isVisibleSidebar"
        />
      </template>

      <template #end>
        <AvatarComponent />
      </template>
    </Toolbar>

    <Sidebar v-model:visible="isVisibleSidebar" class="full-height">
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
  components: {
    SidebarContent,
    AvatarComponent,
    Sidebar,
    Toolbar
  },
  data: () => ({
    isVisibleSidebar: false
  })
}
</script>

<style scoped>
.full-height :global(.p-sidebar-content) {
  height: 100% !important;
}
</style>
