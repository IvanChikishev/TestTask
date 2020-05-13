import * as product from '@/api/request.js';

export default {
    actions: {
        async fetchProducts(ctx) {
            let products = await product.getProducts()
            product.getProducts()
                .then(function () { ctx.commit('updateProducts', products) })
                .catch(function (error) { alert(error.error + '. Обновите страницу!') });
        }
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products
        },

        updateColums({columns}, columnId) {
            columns.splice(0, 0, columns.splice(columnId, 1)[0]);
        }
    },
    state: {
        columns: [
            { id: 0, label: 'Product (100g serving)', name: 'product' },
            { id: 1, label: 'Calories', name: 'calories' },
            { id: 2, label: 'Fast (g)', name: 'fat' },
            { id: 3, label: 'Crabs (g)', name: 'carbs' },
            { id: 4, label: 'Protein (g)', name: 'protein' },
            { id: 5, label: 'Iron (%)', name: 'iron' },
        ],
        products: [],
    },
    getters: {
        allColumns(state) {
            return state.columns
        },
        allProducts(state) {
            return state.products
        }
    }
}