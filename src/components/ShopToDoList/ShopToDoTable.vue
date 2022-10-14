<template>
<div>
  <DataTable
      :value="list"
      responsiveLayout="scroll"
      scrollHeight="20rem"
      :scrollable="true"
      stripedRows
      showGridlines
      editMode="cell"
      @cell-edit-complete="onCellEditComplete"
  >
    <Column bodyClass="w-1rem justify-content-center flex-grow-0 p-4" headerClass="w-1rem flex-grow-0 p-4">
      <template #body="slotProps">
        <Checkbox v-model="slotProps.data.isDone" :binary="true"/>
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
  </DataTable>
  <div class="flex justify-content-center" style="height: 0">
    <Button
        icon="pi pi-plus text-2xl"
        class="p-button-text p-button-rounded p-button-raised bg-white h-3rem w-3rem"
        style="bottom: 1.5rem"
        v-tooltip.left="'Добавить элемент'"
        @click="$emit('addNewRow')"
    />
  </div>
</div>
</template>

<script>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Checkbox from 'primevue/checkbox'

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
  },
  components: {
    Checkbox,
    DataTable,
    Column
  }
}
</script>

<style scoped>
.text-decoration-line-through {
  text-decoration: line-through;
}
</style>
