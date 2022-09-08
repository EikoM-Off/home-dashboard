<template>
  <div>
    <MenuBarView />
    <router-view />
  </div>
</template>

<script>
import MenuBarView from '@/components/Menubar/MenuBarView'
export default {
  name: 'App',
  components: { MenuBarView }
}
</script>

<style>

</style>
