<template>
<Card class="shadow-5">
  <template #title>
    <div class="flex flex-row justify-content-between">
      Списки покупок/заданий
      <Button
          icon="pi pi-plus"
          class="p-button-sm p-button-secondary p-button-rounded align-self-center"
          v-tooltip.left="'Создать новый список'"
          @click="$store.commit('addList', 'Новый список')"
          @contextmenu.prevent="$event.target.hover()"
      />
    </div>
  </template>
  <template #content>
  <TabView :scrollable="true" v-model:activeIndex="activeTab">
    <TabPanel
    v-for="(list, index) in shopToDoLists"
    :key="list.settings.title + index"
    >
      <template #header>
        <Button
            class="p-button-sm p-button-text p-button-rounded p-button-secondary mr-2"
            icon="pi pi-pencil"
            @click="[currentList = list, $refs.op.toggle($event)]"
            aria-controls="overlay_panel"
            aria:haspopup="true"
        />
          <span @contextmenu.prevent="[currentList = list, $refs.op.toggle($event)]">{{ list.settings.title }}</span>
      </template>
        <ShopToDoTable
            class="-m-3"
            v-model:list="list.items"
            @addNewRow="addNewRow(list)"
            @removeRow="list.items.splice($event, 1)"
        />
    </TabPanel>
  </TabView>
  <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true" id="overlay_panel">
    <ListSettings v-model:settings="currentList.settings" @removeList="removeList"/>
  </OverlayPanel>
  </template>
</Card>
</template>

<script>
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import { mapGetters } from 'vuex'
import ShopToDoTable from '@/components/MainPageComponents/ShopToDoList/ShopToDoTable'
import OverlayPanel from 'primevue/overlaypanel'
import ListSettings from '@/components/MainPageComponents/ShopToDoList/ListSettings'

export default {
  name: 'ShopToDoListComponent',
  data: () => ({
    activeTab: 0,
    currentList: null,
    touching: false
  }),
  computed: {
    ...mapGetters({
      shopToDoLists: 'getShopToDoLists'
    })
  },
  methods: {
    addNewList (event) {
      if (!this.touching) return
      this.$refs.op.toggle(event)
    },
    addNewRow (list) {
      list.items ? list.items.push({ title: 'Введите наименование', isDone: false }) : list.items = [{ title: 'Введите наименование', isDone: false }]
    },
    removeList () {
      this.$confirm.require({
        message: 'Вы действительно хотите удалить список?',
        header: 'Подтвердите',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Да',
        acceptClass: 'p-button-danger',
        rejectLabel: 'Нет',
        accept: () => {
          this.$store.commit('removeList', this.activeTab)
          this.$refs.op.hide()
        }
      })
    }
  },
  watch: {
    shopToDoLists: {
      handler (newValue, oldValue) {
        this.$store.dispatch('updateShopToDoLists')
      },
      deep: true
    },
    touching: function () {
      setTimeout(() => this.addNewList, 1000)
    }
  },
  mounted () {
    this.$store.dispatch('getShopToDoLists')
  },
  components: {
    ListSettings,
    ShopToDoTable,
    OverlayPanel,
    TabView,
    TabPanel
  }
}
</script>

<style scoped>

</style>
