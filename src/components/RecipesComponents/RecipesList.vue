<template>
  <div>
    <div class="mt-2 grid gap-3">
      <div v-if="!recipes" class="flex justify-content-center col-12">
       <span class="p-component text-3xl">Рецептов не найдено, добавим?</span>
      </div>
      <RecipeCard
        v-for="(recipe, index) in recipes"
        :id="index"
        :key="'recipe' + index"
        class="shadow-1 col-12 md:col-6 lg:col-4 border-round-xl"
        :recipe="recipe"
        @open-recipe=";[(currentRecipeId = $event), (isVisibleSidebar = true)]"
      />
    </div>

    <Sidebar
      v-model:visible="isVisibleSidebar"
      :class="classes['custom-sidebar']"
      position="bottom"
      @hide="isEdit = false"
    >
      <RecipeCard
        v-if="!isEdit && currentRecipeId !== null"
        :id="currentRecipeId"
        style="height: 90vh"
        :recipe="getRecipeById(currentRecipeId)"
        :full-recipe="true"
        @open-recipe="isVisibleSidebar = true"
      />
      <RecipeEditorComponent
        v-if="isEdit || currentRecipeId === null"
        :id="currentRecipeId"
        :recipe-prop="getRecipeById(currentRecipeId)"
        @close-bottom-bar="[isVisibleSidebar = false, isEdit = false]"
      />
      <Button
          v-if="!isEdit && currentRecipeId !== null"
          class="p-button-rounded p-button-raised fixed p-button-warning"
          style="bottom: 2rem; right: 2rem"
          icon="pi pi-pencil"
          @click="isEdit = true"
      />
    </Sidebar>
  </div>
</template>

<script>
import RecipeCard from '@/components/RecipesComponents/RecipeCard'
import Sidebar from 'primevue/sidebar'
import { mapGetters } from 'vuex'
import RecipeEditorComponent from '@/components/RecipesComponents/RecipeEditor/RecipeEditorComponent'

export default {
  name: 'RecipesList',
  components: {
    RecipeEditorComponent,
    RecipeCard,
    Sidebar
  },
  data: () => ({
    isVisibleSidebar: false,
    currentRecipeId: null,
    isEdit: false
  }),
  computed: {
    ...mapGetters({
      recipes: 'getRecipes',
      getRecipeById: 'getRecipeById'
    })
  },
  mounted() {
    this.$store.dispatch('getRecipes')
  },
  methods: {
    addNewRecipe() {
      this.currentRecipeId = null
      this.isEdit = false
      this.isVisibleSidebar = true
    }
  }
}
</script>

<style module="classes">
.custom-sidebar {
  height: 90vh;
}
</style>
