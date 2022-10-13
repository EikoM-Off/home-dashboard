<template>
<DataTable
    :value="list"
    responsiveLayout="scroll"
    scrollHeight="20rem"
    :scrollable="true"
    stripedRows
    editMode="cell"
    @cell-edit-complete="onCellEditComplete"
>
  <Column>
    <template #body="slotProps">
      <Checkbox v-model="slotProps.data.isDone" :binary="true"/>
    </template>
  </Column>
  <Column field="title" header="Наименование">
    <template #body="slotProps">
      <span :class="{'text-decoration-line-through' : slotProps.data.isDone}">{{ slotProps.data.title }}</span>
    </template>
    <template #editor="slotProps">
      <InputText v-model="slotProps.data.title" @focus="$event.target.select()"/>
    </template>
  </Column>
  <Column bodyClass="w-2rem text-center" headerClass="w-2rem">
    <template #body="slotProps">
      <Button icon="pi pi-trash" class="p-button-rounded p-button-danger p-button-text p-button-sm" @click="$emit('removeRow', slotProps.index)"/>
    </template>
  </Column>
  <template #footer>
    <div class="flex flex-row justify-content-end">
      <Button label="Добавить новую запись" class="" @click="$emit('addNewRow')"/>
    </div>
  </template>
</DataTable>
</template>

<script>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'

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
    }
  },
  components: {
    Checkbox,
    InputText,
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
