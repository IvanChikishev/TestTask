<template>
  <table class="table">
    <header-table :columns="columns" :active="active"/>
    <body-table :columns="columns" :active="active" :products="products"/>
  </table>
</template>


<script>
import HeaderTable from './HeaderTable.vue'
import BodyTable from './BodyTable.vue'

export default {
  components: {
    HeaderTable,
    BodyTable
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    active: {
      type: String,
      default: 'product',
    },
    products: {
      type: Array
    }
  },
}
</script>

<style lang="scss">
  .table {
    width: 100%;
    padding: 20px 35px;
    background-color: #fff;
    border-radius: 4px;
    margin-top: 15px;
  }
</style>