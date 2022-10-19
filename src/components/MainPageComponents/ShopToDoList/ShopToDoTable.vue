<template>
<div>
  <ul class="pl-5 pr-5 overflow-y-auto max-h-24rem">
    <li
        v-for="(item, index) in list"
        :key="'row' + item.title + item.isDone + index"
        class="flex flex-row w-12 gap-2 justify-content-between align-items-center mb-2 border-bottom-1 border-300"
    >
      <Checkbox v-model="item.isDone" :binary="true" @change="sorting"/>
      <InputText :class="['w-12 border-0 hover:border-400', {'text-decoration-line-through' : item.isDone}]" :value="item.title" @change="item.title = $event.target.value" @focus="$event.target.select()" maxlength="100"/>
      <Button icon="pi pi-trash" class="p-button-rounded p-button-danger p-button-text p-button-sm" @click="removeRow(index)"/>
    </li>
  </ul>

  <div class="flex justify-content-center" style="height: 0">
    <Button
        icon="pi pi-plus text-2xl"
        class="p-button-text p-button-rounded p-button-raised bg-white h-3rem w-3rem"
        style="bottom: 1.5rem"
        v-tooltip.left="'Добавить элемент'"
        @click="[$store.dispatch('addShopItem', listId)]"
        @contextmenu.prevent="$event.target.hover()"
    />
  </div>
</div>
</template>

<script>

export default {
  name: 'ShopToDoTable',
  data: () => ({
    editingRows: []
  }),
  props: {
    list: {
      type: [Array, Object],
      default: () => []
    },
    listId: [String, Number]
  },
  methods: {
    onCellEditComplete (event) {
      let { data, newValue, field } = event
      if (!newValue) return
      data[field] = newValue
    },
    sorting () {
      /* const sortedList = [
        ...this.list.filter(elem => elem.isDone === false),
        ...this.list.filter(elem => elem.isDone === true)
      ]
      this.$store.dispatch('updateShopToDoLists', { listId: this.listId, items: sortedList }) */
    },
    removeRow (index) {
      this.$confirm.require({
        message: 'Вы действительно хотите удалить элемент?',
        header: 'Подтвердите',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Да',
        acceptClass: 'p-button-danger',
        rejectLabel: 'Нет',
        accept: () => {
          this.$store.dispatch('removeShopItem', { listId: this.listId, itemId: index })
        }
      })
    }
  }
}
</script>

<style scoped>
.text-decoration-line-through {
  text-decoration: line-through;
}

</style>
