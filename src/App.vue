<template>
  <div id="app">
    <div class="container">
      <h1>Table UI</h1>
      <hr>
      <div class="test">
        <div class="test-header">
          <div class="test-header__left">
            <sort-table :columns="allColumns" :active="activeColumn" @changingActiveColumn="changingActiveColumn"/>
          </div>
          <div class="test-header__right">
          </div>
        </div>
        <div class="test-body">
          <Table :columns="allColumns" :active="activeColumn" :products="allProducts"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SortTable from './components/SortTable.vue'
import Table from './components/Table.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    SortTable,
    Table,
  },
  data() {
    return {
      activeColumn: 'product',
    }
  },
  computed: mapGetters(['allColumns', 'allProducts']),
  methods: {
    changingActiveColumn(active) {
      this.activeColumn = active
    }
  },
  async mounted() {
    this.$store.dispatch('fetchProducts');
  }
}
</script>

<style>
#app {
  margin: 35px 0;
}
</style>
