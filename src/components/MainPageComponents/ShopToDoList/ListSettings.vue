<template>
  <Card class="shadow-none">
    <template #header />
    <template #title> Настройки списка </template>
    <template #content>
      <div class="flex flex-column gap-2">
        <div class="">
          <h5 class="mb-2">Название списка</h5>
          <input
            v-model.lazy.trim="listOptions.title"
            type="text"
            placeholder="Введите название списка"
            class="p-inputtext p-component w-12"
            maxlength="20"
            @focus="$event.target.select()"
          />
        </div>
        <Button
          icon="pi pi-trash"
          class="p-button-secondary w-12"
          label="Очистить выполненные"
          @click="removeDone"
        />
      </div>
    </template>
    <template #footer>
      <Divider class="mt-0" />
      <div class="flex justify-content-between gap-2">
        <Button
          icon="pi pi-trash"
          class="p-button-danger p-button-text"
          label="Удалить"
          @click="removeList"
        />
        <Button
          icon="pi pi-check"
          label="Применить"
          @click="updateListSettings"
        />
      </div>
    </template>
  </Card>
</template>

<script>
import '@/utils/ObjectFuncs'
export default {
  name: 'ListSettings',
  props: {
    settings: Object,
    listId: [Number, String]
  },
  data: () => ({
    listOptions: {}
  }),
  mounted() {
    this.listOptions = this.settings
  },
  methods: {
    updateListSettings() {
      this.$store.dispatch('updateListSettings', {
        listId: this.listId,
        listSettings: this.listOptions
      })
      this.$emit('hide')
    },
    removeDone() {
      this.$confirm.require({
        message: `Вы действительно хотите удалить выполненные в списке "${this.listOptions.title}"?`,
        header: `Удалить выполненные?`,
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Да',
        acceptClass: 'p-button-secondary',
        rejectLabel: 'Нет',
        accept: () => {
          const data = this.$store.getters.getShopToDoListsById(
            this.listId
          ).items
          this.$store.dispatch('removeDoneItems', {
            listId: this.listId,
            listData: Object.filter(data, (score) => !score.isDone)
          })
          this.$emit('hide')
        }
      })
    },
    removeList() {
      this.$confirm.require({
        message: `Вы действительно хотите удалить список "${this.listOptions.title}"?`,
        header: `Удалить "${this.listOptions.title}"?`,
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Да',
        acceptClass: 'p-button-danger',
        rejectLabel: 'Нет',
        accept: () => {
          this.$store.dispatch('removeShopToDoLists', this.listId)
          this.$emit('hide')
        }
      })
    }
  }
}
</script>

<style scoped></style>
