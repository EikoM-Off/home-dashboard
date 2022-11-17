<template>
  <div>
    <h3>Глобальные цели</h3>
    <Listbox :options="value" option-label="title" />
  </div>
</template>

<script>
export default {
  name: 'SideBarFooter',
  data: () => ({
    value: [
      {
        title: 'Уехать в Турцию'
      },
      {
        title: 'Регулярный спорт'
      },
      {
        title: 'Стать уверенными'
      }
    ]
  })
}
</script>

<style scoped></style>
