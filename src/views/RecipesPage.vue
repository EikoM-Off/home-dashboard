<template>
  <div class="pr-5 pl-5">
    <RecipesList />
  </div>
</template>

<script>
import RecipesList from '@/components/RecipesComponents/RecipesList'

export default {
  name: 'RecipesPage',
  components: { RecipesList },
  data: () => ({
    value1: null
  })
}
</script>

<style scoped></style>
