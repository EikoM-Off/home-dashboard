<template>
  <PanelMenu :model="items">
  </PanelMenu>
</template>

<script>
export default {
  name: 'SidebarNavigationsLink',
  data: vm => ({
    items: [{
      key: '0_0',
      label: 'Главная',
      icon: 'pi pi-fw pi-home',
      command: () => { vm.$router.push('/') }
    },
    {
      key: '0_1',
      label: 'Рецепты',
      icon: 'pi pi-fw pi-book',
      command: () => { vm.$router.push('/recipes') }
    }
    ]
  })
}
</script>

<style scoped>

</style>
