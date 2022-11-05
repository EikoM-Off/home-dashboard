<template>
  <div>
    <div class="flex align-items-center mb-1">
      <InputText
        v-model.trim="step.title"
        :class="[
          'text-700 text-3xl pt-1 pb-1 text-black-alpha-80 font-bold w-12'
        ]"
      />
      <Button
        icon="pi pi-trash"
        class="p-button-rounded p-button-danger p-button-text p-button-sm"
        @click="removeStep"
      />
    </div>
    <Editor v-model="step.content">
      <template #toolbar>
        <span class="ql-formats">
          <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
          <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
          <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
          <button
            v-tooltip.bottom="'List'"
            class="ql-list"
            value="ordered"
          ></button>
          <button
            v-tooltip.bottom="'List'"
            class="ql-list"
            value="bullet"
          ></button>
        </span>
      </template>
    </Editor>
  </div>
</template>

<script>
export default {
  name: 'RecipeStep',
  props: {
    stepProp: {
      type: Object,
      default: () => ({
        title: 'Шаг',
        content: ''
      })
    }
  },
  computed: {
    step: {
      get() {
        return this.stepProp
      },
      set(value) {
        this.$emit('update:stepProp', value)
      }
    }
  },
  methods: {
    removeStep() {
      this.$confirm.require({
        message: `Вы действительно хотите удалить "${this.step.title}"?`,
        header: `Удалить шаг готовки?`,
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Да',
        acceptClass: 'p-button-danger',
        rejectLabel: 'Нет',
        accept: () => {
          this.$emit('removeStep')
        }
      })
    }
  }
}
</script>

<style scoped></style>
