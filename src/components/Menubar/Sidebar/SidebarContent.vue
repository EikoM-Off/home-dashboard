<template>
  <div class="flex flex-column h-full">
    <SidebarNavigationsLink class="flex-grow-1" />
    <SideBarFooter />
  </div>
</template>

<script>
import SidebarNavigationsLink from '@/components/Menubar/Sidebar/SidebarNavigationsLink'
import SideBarFooter from '@/components/Menubar/Sidebar/SideBarFooter'
export default {
  name: 'SidebarContent',
  components: { SideBarFooter, SidebarNavigationsLink }
}
</script>

<style scoped></style>
