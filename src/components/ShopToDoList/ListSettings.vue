<template>
    <Card class="shadow-none">
      <template #header>
      </template>
      <template #title>
        Настройки списка
      </template>
      <template #content>
        <div class="flex flex-column">
          <div class="">
            <h5 class="mb-2">Название списка</h5>
            <input
              type="text"
              placeholder="Введите название списка"
              class="p-inputtext p-component"
              maxlength="20"
              v-model.lazy.trim="listOptions.title"
              @focus="$event.target.select()"
            />
          </div>
        </div>
      </template>
      <template #footer>
        <Button icon="pi pi-trash" class="p-button-danger w-12" label="Удалить список" @click="$emit('removeList')"/>
      </template>
    </Card>
</template>

<script>
export default {
  name: 'ListSettings',
  data: () => ({
    listOptions: {}
  }),
  props: {
    settings: Object
  },
  mounted () {
    this.listOptions = this.settings
  }
}
</script>

<style scoped>

</style>
