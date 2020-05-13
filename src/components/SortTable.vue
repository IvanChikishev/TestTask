<template>
  <div class="sorting-table">
    <p class="sorting-table__label">Sorting by:</p>
    <a
      href="#"
      class="sorting-table__item"
      v-for="({name, label}, columnId) in columns"
      :key="name"
      v-bind:class="{'sorting-table__item--active': active === name}"
      @click="changingActiveColumn({name, columnId})"
    >{{label}}</a>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true
    },
    active: {
      type: String,
      default: "product"
    }
  },
  methods: {
    changingActiveColumn: function({ name, columnId }) {
      this.$emit("changingActiveColumn", name);
      this.$store.commit("updateColums", columnId);
      // console.log(name);
    }
  }
};
</script>

<style lang="scss" scoped>
.sorting-table {
  display: flex;
  align-items: center;
  &__label {
    font-weight: 600;
    color: $gray-600;
    margin-right: 10px;
  }
  &__item {
    color: $black;
    margin: 0 5px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &--active {
      color: $white;
      background-color: $primary;
      padding: 5px 10px;
      border-radius: 2px;
      border: none;
    }
  }
}
</style>