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
        updateColums(state, activeColumn) {
            console.log(activeColumn);

            let column = state.columns.find(c => c.name === activeColumn),
                columnID = column.id;
                console.log(state.columns[columnID]);
            delete state.columns[columnID];

            state.columns.unshift(column);
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