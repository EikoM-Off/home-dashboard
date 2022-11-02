<template>
  <CardCustom>
    <template #header>
      <div
        v-if="recipe.image"
        class="h-5rem"
        :style="`background-image: url(${recipe.image}); background-size: cover;`"
      />
      <div v-else class="h-5rem" />
    </template>
    <template #title>
      {{ recipe.title }}
    </template>
    <template #content>
      <div>
        <div class="flex flex-row align-items-center justify-content-between">
          <span class="text-xl font-medium text-black-alpha-80"
            >Ингредиенты</span
          >
          <SplitButton
            label="Создать список"
            icon="pi pi-shopping-cart"
            class="p-button-sm p-button-text h-2rem ml-2"
            :model="ingredientsSplitButton"
            @click="
              ;[$store.dispatch('createFromIngredientsOrNewList', recipe)]
            "
          />
        </div>
        <ul>
          <li
            v-for="(ingredient, index) in recipe.ingredients"
            :key="'ingredient' + index"
          >
            <span>{{ ingredient }}</span>
          </li>
        </ul>
      </div>
      <div v-if="fullRecipe">
        <Divider class="m-0" />
        <ol>
          <li
            v-for="(cookStep, index) in recipe.cookSteps"
            :key="'cookStep' + index"
          >
            <h3>{{ cookStep.title }}</h3>
            <span>{{ cookStep.content }}</span>
          </li>
        </ol>
      </div>
    </template>
    <template #footer>
      <div
        v-if="!fullRecipe"
        class="flex flex-row justify-content-between align-items-center"
      >
        <Button
          label="Посмотреть"
          :class="['p-button-text', { 'w-12': width < 600 }]"
          @click="$emit('openRecipe', id)"
        />
        <div v-if="width > 600" class="font-light">
          <span class="mr-2">{{ recipe.author }}</span>
          <span>{{ recipe.date }}</span>
        </div>
      </div>
    </template>
  </CardCustom>
</template>

<script>
import CardCustom from '@/layout/CardCustom'
export default {
  name: 'RecipeCard',
  components: { CardCustom },
  props: {
    recipe: Object,
    id: [Number, String],
    fullRecipe: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    ingredientsSplitButton: [
      {
        label: 'Добавить в существующий',
        command: () => {}
      }
    ],
    width: 0
  }),
  created() {
    window.addEventListener('resize', this.updateWidth)
    this.width = window.innerWidth
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth
    }
  }
}
</script>

<style scoped>
ol {
  list-style-type: none;
  counter-reset: num;
  margin: 0 0 0 60px;
  padding: 15px 0 0 0;
}
ol li {
  position: relative;
  padding: 0 0 0.5rem 0;
}
ol li:before {
  content: counter(num);
  counter-increment: num;
  display: inline-block;
  position: absolute;
  top: -0.5rem;
  left: -2.5rem;
  width: 3rem;
  color: #ef6780;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}
</style>
