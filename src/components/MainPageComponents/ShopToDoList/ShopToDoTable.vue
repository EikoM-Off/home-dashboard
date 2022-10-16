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
<!--    <DataTable
      :value="list"
      responsiveLayout="scroll"
      scrollHeight="310px"
      :scrollable="true"
      stripedRows
      showGridlines
      editMode="cell"
      @cell-edit-complete="onCellEditComplete"
  >
    <Column bodyClass="w-1rem justify-content-center flex-grow-0 p-4" headerClass="w-1rem flex-grow-0 p-4">
      <template #body="slotProps">
        <Checkbox v-model="slotProps.data.isDone" :binary="true" @change="sorting"/>
      </template>
    </Column>
    <Column field="title" header="Наименование" bodyClass="justify-content-center" headerClass="justify-content-center">
      <template #body="slotProps">
        <span :class="{'text-decoration-line-through' : slotProps.data.isDone}">{{ slotProps.data.title }}</span>
      </template>
      <template #editor="slotProps">
        <InputText v-model="slotProps.data.title" @focus="$event.target.select()" maxlength="100"/>
      </template>
    </Column>
    <Column bodyClass="w-1rem justify-content-center flex-grow-0 p-4" headerClass="w-1rem flex-grow-0 p-4">
      <template #body="slotProps">
        <Button icon="pi pi-trash" class="p-button-rounded p-button-danger p-button-text p-button-sm" @click="removeRow(slotProps.index)"/>
      </template>
    </Column>
  </DataTable>-->

  <div class="flex justify-content-center" style="height: 0">
    <Button
        icon="pi pi-plus text-2xl"
        class="p-button-text p-button-rounded p-button-raised bg-white h-3rem w-3rem"
        style="bottom: 1.5rem"
        v-tooltip.left="'Добавить элемент'"
        @click="[$emit('addNewRow'), sorting()]"
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
      type: Array,
      default: () => []
    }
  },
  methods: {
    onCellEditComplete (event) {
      let { data, newValue, field } = event
      if (!newValue) return
      data[field] = newValue
    },
    sorting () {
      this.$emit('update:list', [
        ...this.list.filter(elem => elem.isDone === false),
        ...this.list.filter(elem => elem.isDone === true)
      ])
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
          this.$emit('removeRow', index)
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
