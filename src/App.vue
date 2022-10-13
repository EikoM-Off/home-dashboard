<template>
  <div>
    <MenuBarView v-if="false" />
    <router-view />
    <ConfirmDialog />
  </div>
</template>

<script>
import MenuBarView from '@/components/Menubar/MenuBarView'
import ConfirmDialog from 'primevue/confirmdialog'

export default {
  name: 'App',
  mounted () {
    this.$store.dispatch('tryLogin')
  },
  components: {
    MenuBarView,
    ConfirmDialog
  }
}
</script>

<style>

</style>
