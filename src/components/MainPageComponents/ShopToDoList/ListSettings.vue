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
          <Button icon="pi pi-trash" class="p-button-secondary w-12" label="Очистить выполненные" @click="removeDone"/>
        </div>
      </template>
      <template #footer>
        <Divider class="mt-0" />
        <div class="flex justify-content-between">
          <Button icon="pi pi-trash" class="p-button-danger" label="Удалить" @click="removeList"/>
          <Button icon="pi pi-check" label="Применить" @click="updateListSettings"/>
        </div>
      </template>
    </Card>
</template>

<script>
import '@/utils/ObjectFuncs'
export default {
  name: 'ListSettings',
  data: () => ({
    listOptions: {}
  }),
  props: {
    settings: Object,
    listId: [Number, String]
  },
  methods: {
    updateListSettings () {
      this.$store.dispatch('updateListSettings', { listId: this.listId, listSettings: this.listOptions })
      this.$emit('hide')
    },
    removeDone () {
      this.$confirm.require({
        message: `Вы действительно хотите удалить выполненные в списке "${this.listOptions.title}"?`,
        header: `Удалить выполненные?`,
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Да',
        acceptClass: 'p-button-secondary',
        rejectLabel: 'Нет',
        accept: () => {
          const data = this.$store.getters.getShopToDoListsById(this.listId).items
          this.$store.dispatch('removeDoneItems', { listId: this.listId, listData: Object.filter(data, score => !score.isDone) })
          this.$emit('hide')
        }
      })
    },
    removeList () {
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
  },
  mounted () {
    this.listOptions = this.settings
  }
}
</script>

<style scoped>

</style>
