<template>
  <Card class="shadow-5">
    <template #header>
      <!--    <img
        class="h-2rem"
        style="object-fit: cover;"
        src="https://media.istockphoto.com/photos/eco-friendly-paper-shop-bag-with-raw-organic-green-vegetables-on-picture-id1352226526"
    />-->
    </template>
    <template #title>
      <div class="flex flex-row justify-content-between align-items-center">
        <i class="pi pi-shopping-cart text-xl" />
        Списки покупок
        <Button
          v-tooltip.left="'Создать новый список'"
          icon="pi pi-plus"
          :class="[
            'p-button-sm p-button-secondary p-button-rounded align-self-center',
            {
              'animate__animated animate__rubberBand animate__delay-1s':
                !shopToDoLists
            }
          ]"
          @click="$store.dispatch('createFromIngredientsOrNewList')"
          @contextmenu.prevent="$event.target.hover()"
        />
      </div>
    </template>
    <template #content>
      <Accordion
        v-if="shopToDoLists"
        v-model:activeIndex="activeTab"
        class="h-30rem overflow-y-auto"
      >
        <AccordionTab
          v-for="(list, id) in shopToDoLists"
          :key="list.settings.title + id"
        >
          <template #header>
            <div
              class="flex w-12 align-items-baseline justify-content-between"
              @contextmenu.prevent="
                ;[
                  (currentList = list),
                  (currentListId = id),
                  $refs.op.toggle($event)
                ]
              "
            >
              <span class="trimmed-text-2">
                {{ list.settings.title }}
              </span>
              <Button
                class="p-button-sm p-button-text p-button-rounded p-button-secondary mr-2"
                icon="pi pi-pencil"
                aria-controls="overlay_panel"
                aria:haspopup="true"
                @click="
                  ;[
                    (currentList = list),
                    (currentListId = id),
                    $refs.op.toggle($event)
                  ]
                "
              />
            </div>
          </template>
          <ShopToDoTable v-model:list="list.items" class="-m-3" :list-id="id" />
        </AccordionTab>
      </Accordion>

      <div v-if="!shopToDoLists" class="w-12 flex justify-content-center">
        Пока нет списков (｡•́︿•̀｡)
      </div>
      <OverlayPanel
        id="overlay_panel"
        ref="op"
        append-to="body"
        :show-close-icon="true"
      >
        <ListSettings
          v-model:settings="currentList.settings"
          :list-id="currentListId"
          @hide="$refs.op.hide()"
        />
      </OverlayPanel>
    </template>
  </Card>
</template>

<script>
import { mapGetters } from 'vuex'
import ShopToDoTable from '@/components/MainPageComponents/ShopToDoList/ShopToDoTable'
import OverlayPanel from 'primevue/overlaypanel'
import ListSettings from '@/components/MainPageComponents/ShopToDoList/ListSettings'
import hash from 'object-hash'

export default {
  name: 'ShopToDoListComponent',
  components: {
    ListSettings,
    ShopToDoTable,
    OverlayPanel
  },
  data: () => ({
    activeTab: 0,
    currentList: null,
    currentListId: null,
    touching: false
  }),
  computed: {
    ...mapGetters({
      shopToDoLists: 'getShopToDoLists',
      hashList: 'getHashList'
    })
  },
  watch: {
    /*    shopToDoLists: {
      handler (newValue, oldValue) {
        this.$store.dispatch('updateShopToDoLists')
      },
      deep: true
    }, */
    touching: function () {
      setTimeout(() => this.addNewList, 1000)
    }
  },
  mounted() {
    this.$store.dispatch('getShopToDoLists')
  },
  methods: {
    hash,
    addNewList(event) {
      if (!this.touching) return
      this.$refs.op.toggle(event)
    },
    addNewRow(list) {
      list.items
        ? list.items.push({ title: 'Введите наименование', isDone: false })
        : (list.items = [{ title: 'Введите наименование', isDone: false }])
    }
  }
}
</script>

<style scoped>
.badge-custom :global(.p-badge) {
  height: 5px;
  min-width: 5px;
}
</style>
