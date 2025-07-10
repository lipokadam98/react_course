import {createSlice} from "@reduxjs/toolkit";

const initialShoppingCartState = { items: [], cartVisible: false }

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: initialShoppingCartState,
    reducers: {
        addItem(state, action){
            const generatedId = Math.random().toString();

            const {title, price, quantity} = action.payload.product;

            const existingItem = state.items.find(item => item.title === title);

            if(existingItem){
                existingItem.quantity += quantity;
                return;
            }

            const cartItem = {
                id: generatedId,
                title,
                price,
                quantity,
                total: price * quantity
            }

            state.items.push(cartItem);
        },
        increaseItemQuantity(state, action){
            const existingItem = state.items.find(item => item.id === action.payload.id);
            existingItem.quantity++;
        },
        decreaseItemQuantity(state, action){
            const existingItem = state.items.find(item => item.id === action.payload.id);
            existingItem.quantity--;

            if(existingItem.quantity <= 0){
                state.items = state.items.filter(item => item.id !== action.payload.id);
            }
        },
        toggleShoppingCart(state){
            state.cartVisible = !state.cartVisible;
        }
    }
})

export const shoppingCartActions = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;