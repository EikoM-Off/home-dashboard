<template>
  <div>
    <div class="mt-2 grid gap-3">
      <RecipeCard
        v-for="(recipe, index) in recipes"
        :id="index"
        :key="'recipe' + index"
        class="shadow-1 col-12 md:col-4 lg:col-3"
        :recipe="recipe"
        @open-recipe=";[(currentRecipeId = $event), (isVisibleSidebar = true)]"
      />
    </div>

    <Sidebar
      v-model:visible="isVisibleSidebar"
      :class="classes['custom-sidebar']"
      position="bottom"
    >
      <RecipeCard
        v-if="currentRecipeId !== null"
        :id="currentRecipeId"
        style="height: 90vh"
        :recipe="getRecipeById(currentRecipeId)"
        :full-recipe="true"
        @open-recipe="isVisibleSidebar = true"
      />
    </Sidebar>
  </div>
</template>

<script>
import RecipeCard from '@/components/RecipesComponents/RecipeCard'
import Sidebar from 'primevue/sidebar'
import { mapGetters } from 'vuex'

export default {
  name: 'RecipesList',
  components: { RecipeCard, Sidebar },
  data: () => ({
    isVisibleSidebar: false,
    currentRecipeId: null
  }),
  computed: {
    ...mapGetters({
      recipes: 'getRecipes',
      getRecipeById: 'getRecipeById'
    })
  }
}
</script>

<style module="classes">
.custom-sidebar {
  height: 90vh;
}
</style>
