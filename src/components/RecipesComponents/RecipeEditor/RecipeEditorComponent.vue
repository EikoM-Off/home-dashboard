<template>
  <div
    class="grid overflow-y-auto"
    style="height: calc(90vh - 63px)"
  >
    <div class="col-12 sm:col-12 md:col-6 lg:col-4">
      <!--        <div
          v-if="recipe.image"
          class="h-5rem"
          :style="`background-image: url(${recipe.image}); background-size: cover;`"
        />-->
      <!--        <div class="h-5rem fixed -mt-6">
          <InputText
            v-model.trim="recipe.image"
            :class="['pl-0 font-bold w-12 border-300']"
          />
        </div>-->
      <div class="lg:sticky lg:top-0">
        <InputText
          v-model.trim="recipe.title"
          :class="[
            'text-700 border-300 mt-2 text-2xl text-black-alpha-80 font-bold w-12'
          ]"
          @focus="$event.target.select()"
        />

        <div class="pt-4 pb-4 pl-2 pr-2">
          <div class="flex flex-row align-items-center justify-content-between">
            <span class="text-xl font-medium text-black-alpha-80"
              >Ингредиенты</span
            >
          </div>
          <IngredientsListEditor
            v-model:ingredients-prop="recipe.ingredients"
            @add-ingredient="recipe.ingredients.push('Введите наименование')"
            @remove-ingredient="recipe.ingredients.splice($event, 1)"
          />
        </div>
      </div>
    </div>

    <div class="col-12 sm:col-12 md:col-6 lg:col-8 pt-4 pb-4 pl-2 pr-2">
      <span class="text-3xl font-medium text-black-alpha-80">Как готовить</span>
      <ol class="pl-0 ml-4">
        <li
          v-for="(cookStep, index) in recipe.cookSteps"
          :key="'cookStep' + index"
          class="mb-2"
        >
          <RecipeStep
            :step-prop="cookStep"
            @remove-step="recipe.cookSteps.splice(index, 1)"
          />
        </li>
      </ol>
      <div class="flex justify-content-center">
        <Button
          label="Добавить шаг"
          class="w-12 sm:w-6 lg:w-3"
          @click="recipe.cookSteps.push({ title: 'Шаг', content: '' })"
        />
      </div>
    </div>
    <div class="col-12 text-center max-h-4rem">
      <Divider />
      <Button class="w-12 sm:w-6 lg:w-3 p-button-success" label="Сохранить" @click="saveOrPushRecipe" />
    </div>
  </div>
</template>

<script>
import IngredientsListEditor from '@/components/RecipesComponents/RecipeEditor/IngredientsListEditor'
import RecipeStep from '@/components/RecipesComponents/RecipeEditor/RecipeStep'
export default {
  name: 'RecipeEditorComponent',
  components: { RecipeStep, IngredientsListEditor },
  props: {
    recipeProp: {
      type: Object,
      default: () => ({
        title: 'Введите название блюда',
        ingredients: [],
        cookSteps: [],
        date: new Date(),
        author: 'HZ'
      })
    },
    id: {
      type: [Number, String],
      default: null
    }
  },
  data: () => ({
    recipe: {}
  }),
  mounted() {
    this.recipe = this.recipeProp
  },
  methods: {
    saveOrPushRecipe () {
      this.$store.dispatch('pushNewRecipe', this.recipe)
      this.$emit('closeBottomBar')
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
  top: 0.3rem;
  left: -2.5rem;
  width: 3rem;
  color: #ef6780;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}
</style>
