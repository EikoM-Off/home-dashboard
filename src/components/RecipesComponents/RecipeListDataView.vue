<template>
  <DataView :value="recipes" :layout="layout" :paginator="true" :rows="9" :sort-order="sortOrder" :sort-field="sortField">
    <template #header>
      <div class="grid grid-nogutter">
        <div class="col-12" style="text-align: left">
          <Dropdown v-model="sortKey" :options="sortOptions" option-label="label" placeholder="Sort By Price" @change="onSortChange($event)"/>
        </div>
      </div>
    </template>

    <template #grid="slotProps">
      <div class="col-12 md:col-4">
        <RecipeCard
            :recipe="slotProps.data.recipe"
            @open-recipe=";[(currentRecipeId = $event), (isVisibleSidebar = true)]"
        />
      </div>
    </template>
  </DataView>

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
    <RecipeEditorComponent
        v-if="isEdit || currentRecipeId === null"
        :id="currentRecipeId"
        @close-bottom-bar="isVisibleSidebar = false"
    />
  </Sidebar>
</template>

<script>
import {mapGetters} from 'vuex'
import RecipeCard from '@/components/RecipesComponents/RecipeCard'
import Sidebar from 'primevue/sidebar'
import RecipeEditorComponent from '@/components/RecipesComponents/RecipeEditor/RecipeEditorComponent'

export default {
  name: "RecipeListDataView",
  components: {
    RecipeCard,
    Sidebar,
    RecipeEditorComponent
  },
  data() {
    return {
      isVisibleSidebar: false,
      currentRecipeId: null,
      isEdit: false,
      products: null,
      layout: 'grid',
      sortKey: null,
      sortOrder: null,
      sortField: null,
      sortOptions: [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'},
      ]
    }
  },
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
    },
    onSortChange(event){
      const value = event.value.value;
      const sortValue = event.value;

      if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
        this.sortKey = sortValue;
      }
      else {
        this.sortOrder = 1;
        this.sortField = value;
        this.sortKey = sortValue;
      }
    }
  }
}
</script>

<style module="classes">
.custom-sidebar {
  height: 90vh;
}
</style>
