<template>
  <div>
    <MenuBarView />
    <router-view />
    <ConfirmDialog />

    <Toast position="bottom-right" group="br" />
  </div>
</template>

<script>
import MenuBarView from '@/components/Menubar/MenuBarView'
import ConfirmDialog from 'primevue/confirmdialog'

export default {
  name: 'App',
  components: {
    MenuBarView,
    ConfirmDialog
  },
  mounted() {
    this.$store.dispatch('tryLogin')
  }
}
</script>

<style></style>
