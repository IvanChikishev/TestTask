<template>
    <thead class="table-header">
        <tr class="table-header__block">
            <th class="table-header__item">
                <div class="item-checkbox">
                    <input type="checkbox" name="all-item" id="all-item">
                    <label for="all-item"></label>
                </div>
            </th>
            <th class="table-header__item"
                v-for="item in columns" :key="item.name"
                v-bind:class="{'table-header__item--active': active === item.name}">{{item.label}}</th>
        </tr>
    </thead>
</template>

<script>
export default {
    props: {
        columns: {
            type: Array,
            required: true,
        },
        active: {
            type: String,
            default: 'product',
        }
    },
}
</script>

<style lang="scss">
    .table-header {
        &__block {
            display: flex;
            align-items: center;
        }
        &__item {
            margin-right: 30px;
            width: 150px;
            text-align: left;
            &:first-child { order: 0; width: auto; }
            &:not(:first-child) { order: 2; }
            &:last-child:not(.table-header__item--active) { margin-right: 0; }
            &--active {
                order: 1 !important;
                color: $primary;
            }
        }
    }
</style>