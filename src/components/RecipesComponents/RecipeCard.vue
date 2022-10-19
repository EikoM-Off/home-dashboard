<template>
  <Card class="shadow-1">
    <template #header>
      <div v-if="recipe.image" class="h-5rem" :style="`background-image: url(${recipe.image}); background-size: cover;`"/>
      <div v-else class="h-5rem"/>
    </template>
    <template #title>
      {{ recipe.title }}
    </template>
    <template #content>
      <div>
        <div class="flex flex-row align-items-center justify-content-between">
        <h3>Ингредиенты</h3>
        <SplitButton
            label="Создать список покупок"
            icon="pi pi-shopping-cart"
            class="p-button-sm p-button-text h-2rem ml-2"
            @click="[$store.dispatch('createFromIngredientsOrNewList', recipe)]"
            :model="ingredientsSplitButton"/>
        </div>
        <ul>
          <li v-for="(ingredient, index) in recipe.ingredients"
              :key="'ingredient' + index"
          >
            <span>{{ ingredient }}</span>
          </li>
        </ul>
      </div>
<!--      <div>
        <ul>
          <li v-for="(cookStep, index) in recipe.cookSteps"
              :key="'cookStep' + index"
          >
            <h3>{{ index + 1 }}. {{ cookStep.title }}</h3>
            <span>{{ cookStep.content }}</span>
          </li>
        </ul>
      </div>-->
    </template>
    <template #footer>
      <div class="flex flex-row justify-content-end gap-2">
        <span>{{ recipe.author }}</span>
        <span>{{ recipe.date }}</span>
      </div>
    </template>
  </Card>
</template>

<script>
export default {
  name: 'RecipeCard',
  data: () => ({
    ingredientsSplitButton: [
      {
        label: 'Добавить в существующий',
        command: () => { }
      }
    ]
  }),
  props: {
    recipe: Object
  }
}
</script>

<style scoped>

</style>
