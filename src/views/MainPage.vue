<template>
  <div class="m-0 grid lg:pl-8 lg:pr-8">
    <div class="col-12 md:col-5 lg:col-4">
      <ShopToDoListComponent />
    </div>
    <div class="col-12 md:col-7 lg:col-8">
      <Card class="shadow-5">
        <template #title>
          <div class="flex align-items-center justify-content-between gap-2">
            <i class="pi pi-book text-xl" />
            Рецепты
            <router-link
              v-tooltip.left="'Перейти на страницу рецептов'"
              class="p-button p-component p-button-rounded p-button-secondary p-button-icon-only p-button-sm"
              to="/recipes"
              @contextmenu.prevent="$event.target.hover()"
            >
              <i class="pi pi-external-link" />
            </router-link>
          </div>
        </template>
        <template #content>
          <div class="md:overflow-y-auto md:overflow-x-hidden md:h-30rem">
            <RecipesList ref="RecipesList" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import ShopToDoListComponent from '@/components/MainPageComponents/ShopToDoList/ShopToDoListComponent'
import RecipesList from '@/components/RecipesComponents/RecipesList'

export default {
  name: 'MainPage',
  components: {
    RecipesList,
    ShopToDoListComponent
  }
}
</script>

<style scoped></style>
