import {createSlice} from "@reduxjs/toolkit";

const initialShoppingCartState = {
    items: [],
    cartVisible: false,
    notification: null,
    changed: false
}

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: initialShoppingCartState,
    reducers: {
        replaceCart(state, action){
            state.items = action.payload;
            state.changed = false;
        },
        addItem(state, action){
            const generatedId = Math.random().toString();

            const {title, price, quantity} = action.payload.product;

            const existingItem = state.items.find(item => item.title === title);
            state.changed = true;
            if(existingItem){
                existingItem.quantity += quantity;
                existingItem.total = existingItem.price * existingItem.quantity;
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
            existingItem.total = existingItem.price * existingItem.quantity;
            state.changed = true;
        },
        decreaseItemQuantity(state, action){
            const existingItem = state.items.find(item => item.id === action.payload.id);
            existingItem.quantity--;
            existingItem.total = existingItem.price * existingItem.quantity;
            state.changed = true;
            if(existingItem.quantity <= 0){
                state.items = state.items.filter(item => item.id !== action.payload.id);
            }
        },
        toggleShoppingCart(state){
            state.cartVisible = !state.cartVisible;
        },
        showNotification(state, action){
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        }
    }
})

export const shoppingCartActions = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;