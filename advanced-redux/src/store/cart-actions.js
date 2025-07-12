import {shoppingCartActions} from "./shopping-cart";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-course-42497-default-rtdb.europe-west1.firebasedatabase.app/cart.json');

            if(!response.ok){
                throw new Error('Fetching cart data failed!');
            }

            return await response.json();
        }

        try {
           const data = await fetchData();

           dispatch(shoppingCartActions.replaceCart(data));
        }catch (error){
            dispatch(shoppingCartActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Sending cart data was unsuccessful!'
            }))
        }
    }
}

/**
 * Asynchronous Redux action creator ("thunk") to send the current shopping cart data to a remote database.
 *
 * What does it do?
 * - This function acts as a thunk, meaning it returns another function that receives `dispatch` as an argument.
 * - First, it dispatches a notification action to update the UI, indicating that data sending is in progress.
 * - It then makes an HTTP PUT request to store the cart data on the server (e.g., in a Firebase database).
 * - After the request:
 *    - If successful, it dispatches a "success" notification.
 *    - If it fails, it dispatches an "error" notification.
 *
 * What is an action creator / thunk?
 * - An "action creator" is a function that returns an action (plain object describing a change in state).
 * - A "thunk" is a special type of action creator (enabled by middleware like redux-thunk) that returns a function instead of a plain action.
 *   This returned function can perform asynchronous logic or side effects, and can dispatch multiple actions over time.
 *
 * Use case:
 * This pattern lets you update the server and the app’s UI in sync, providing feedback for remote operations
 * (such as saving a shopping cart) and giving users clear information about what's happening.
 *
 * @param {object} cart - The cart data to be sent to the server.
 * @returns {function} - A thunk function to be handled by redux-thunk middleware.
 */
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(shoppingCartActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }))

        const sendRequest = async () => {
            const response = await fetch('https://react-course-42497-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            })

            if(!response.ok){
                throw new Error('Sending cart data failed!');
            }
        }

        try {
            await sendRequest();

            dispatch(shoppingCartActions.showNotification({
                status: 'success',
                title: 'Success',
                message: 'Sending cart data was successful!'
            }))
        }catch (error){
            dispatch(shoppingCartActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Sending cart data was unsuccessful!'
            }))
        }

    }
}
