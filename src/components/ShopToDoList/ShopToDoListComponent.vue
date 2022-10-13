<template>
<div>
  <TabView :scrollable="true" :activeIndex.sync="activeTab">
    <TabPanel
    v-for="(list, index) in shopToDoLists"
    :key="list.title + index"
    >
      <template #header>
        <span>{{ list.title }}</span>
        <Button
            class="p-button-sm p-button-text p-button-rounded p-button-secondary ml-2"
            icon="pi pi-pencil"
            @click="$refs.op.toggle($event)"
            aria-controls="overlay_panel"
            aria:haspopup="true"
        />
      </template>
        <ShopToDoTable
            :key="list.items.length"
            class="-m-3"
            v-model:list="list.items"
            @addNewRow="list.items.push({ title: '', isDone: false })"
            @removeRow="list.items.splice($event, 1)"
        />
    </TabPanel>
  </TabView>
  <Button icon="pi pi-plus" class="p-button-sm p-button-text p-button-rounded -m-2" @click="$store.commit('addList', 'new List')"/>
  <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true" id="overlay_panel">

  </OverlayPanel>
</div>
</template>

<script>
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import { mapGetters } from 'vuex'
import ShopToDoTable from '@/components/ShopToDoList/ShopToDoTable'
import OverlayPanel from 'primevue/overlaypanel'

export default {
  name: 'ShopToDoListComponent',
  data: () => ({
    activeTab: 0
  }),
  computed: {
    ...mapGetters({
      shopToDoLists: 'getShopToDoLists'
    })
  },
  components: {
    ShopToDoTable,
    OverlayPanel,
    TabView,
    TabPanel
  }
}
</script>

<style scoped>

</style>
