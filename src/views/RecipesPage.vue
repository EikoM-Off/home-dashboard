<template>
  <div class="pr-5 pl-5">
    <RecipesList ref="RecipesList" />
<!--    <RecipeListDataView />-->
    <Button
      class="p-button-rounded p-button-raised fixed"
      style="bottom: 2rem; right: 2rem"
      icon="pi pi-plus"
      @click="$refs.RecipesList.addNewRecipe()"
    />
  </div>
</template>

<script>
import RecipesList from '@/components/RecipesComponents/RecipesList'
// import RecipeListDataView from '@/components/RecipesComponents/RecipeListDataView'

export default {
  name: 'RecipesPage',
  components: {
    // RecipeListDataView,
    RecipesList
  }
}
</script>

<style scoped></style>
