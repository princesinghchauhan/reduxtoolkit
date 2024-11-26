import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // Redux toolkit uses inner behind the seen
            // mutating the state over here
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0
        },
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer;