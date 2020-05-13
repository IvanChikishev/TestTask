<template>
    <div class="sorting-table">
        <p class="sorting-table__label">Sorting by:</p>
        <a href="#" class="sorting-table__item"
            v-for="item in columns" :key="item.name"
            v-bind:class="{'sorting-table__item--active': active === item.name}"
            @click="changingActiveColumn(item.name)">{{item.label}}</a>
    </div>
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
    methods: {
        changingActiveColumn: function (name) {
            this.$emit('changingActiveColumn', name);
            this.$store.commit('updateColums', name);
            console.log(name);

        }
    },
}
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