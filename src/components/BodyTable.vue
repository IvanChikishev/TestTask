<template>
    <tbody>
        <tr class="table-header__block" v-for="item in products" :key="item.id">
            <th class="table-header__item">
                <div class="item-checkbox">
                    <input type="checkbox" name="all-item" id="all-item">
                    <label for="all-item"></label>
                </div>
            </th>
            <th class="table-header__item">{{item.product}}</th>
            <th class="table-header__item">{{item.calories}}</th>
            <th class="table-header__item">{{item.fat}}</th>
            <th class="table-header__item">{{item.carbs}}</th>
            <th class="table-header__item">{{item.protein}}</th>
            <th class="table-header__item">{{item.iron}}</th>
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
}
</script>