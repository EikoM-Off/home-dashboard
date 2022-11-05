<template>
  <div>
    <ul class="max-h-15rem md:max-h-20rem lg:max-h-29rem overflow-y-auto p-0">
      <li
        v-for="(ingredient, index) in ingredients"
        :key="'ingredient' + index"
        class="flex mb-2 border-bottom-1 border-300"
      >
        <InputText
          v-model="ingredients[index]"
          :class="['w-12 border-0 hover:border-400']"
          maxlength="60"
          @focus="$event.target.select()"
        />
        <Button
          icon="pi pi-trash"
          class="p-button-rounded p-button-danger p-button-text p-button-sm"
          @click="removeIngredient(index, ingredient)"
        />
      </li>
    </ul>
    <div class="flex justify-content-center">
      <Button
        label="Добавить ингредиент"
        class="w-12 sm:w-6 md:w-6 lg:w-8"
        @click="$emit('addIngredient')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IngredientsListEditor',
  props: {
    ingredientsProp: Array
  },
  computed: {
    ingredients: {
      get () {
        return this.ingredientsProp
      },
      set (value) {
        this.$emit('update:ingredientsProp', value)
      }
    }
  },
  methods: {
    removeIngredient (index, ingredient) {
      this.$confirm.require({
        message: `Вы действительно хотите удалить "${ingredient}"?`,
        header: `Удалить ингредиент?`,
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Да',
        acceptClass: 'p-button-danger',
        rejectLabel: 'Нет',
        accept: () => {
          this.$emit('removeIngredient', index)
        }
      })
    }
  }
}
</script>

<style scoped></style>
