<template>
    <Card class="shadow-none">
      <template #header>
      </template>
      <template #title>
        Настройки списка
      </template>
      <template #content>
        <div class="flex flex-column gap-2">
          <div class="">
            <h5 class="mb-2">Название списка</h5>
            <input
              type="text"
              placeholder="Введите название списка"
              class="p-inputtext p-component w-12"
              maxlength="20"
              v-model.lazy.trim="listOptions.title"
              @focus="$event.target.select()"
            />
          </div>
          <Button icon="pi pi-trash" class="p-button-secondary w-12" label="Очистить выполненные" @click="$emit('removeDone')"/>
        </div>
      </template>
      <template #footer>
        <Divider class="mt-0" />
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
