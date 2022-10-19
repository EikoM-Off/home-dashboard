<template>
  <div class="mt-2 grid gap-3">
    <RecipeCard
        class="col-12 md:col-4 lg:col-3"
        v-for="(recipe, index) in recipes"
        :key="'recipe' + index"
        :recipe="recipe"
    />
  </div>
</template>

<script>
import RecipeCard from '@/components/RecipesComponents/RecipeCard'
import { mapGetters } from 'vuex'

export default {
  name: 'RecipesList',
  computed: {
    ...mapGetters({
      recipes: 'getRecipes'
    })
  },
  components: { RecipeCard }
}
</script>

<style scoped>

</style>
