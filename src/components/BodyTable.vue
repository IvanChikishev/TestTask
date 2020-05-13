<template>
  <tbody>
    <tr class="table-header__block" v-for="item in products" :key="item.id">
      <th class="table-header__item">
        <div class="item-checkbox">
          <input type="checkbox" name="all-item" id="all-item" />
          <label for="all-item"></label>
        </div>
      </th>

      <th
        class="table-header__item"
        v-for="({name}, columnId) in columns"
        :key="columnId"
      >{{item[name]}}</th>
    </tr>
  </tbody>
</template>


<script>
export default {
  props: {
    products: {
      type: Array
    }
  },

  computed: {
    columns() {
      return this.$store.getters["allColumns"];
    }
  }
};
</script>