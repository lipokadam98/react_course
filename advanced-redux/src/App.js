import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Notification from "./components/UI/Notification";
import {fetchCartData, sendCartData} from "./store/cart-actions";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector(state => state.shoppingCart.cartVisible);
    const cartChanged = useSelector(state => state.shoppingCart.changed);
    const cart = useSelector(state => state.shoppingCart.items);
    const notification = useSelector(state => state.shoppingCart.notification);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [])

    useEffect(() => {
        if(isInitial) {
            isInitial = false;
            return;
        }

        if(cartChanged){
            dispatch(sendCartData(cart))
        }
    }, [cart, dispatch]);
    return (
        <>
            { notification && <Notification status={notification.status}
                                            title={notification.title}
                                            message={notification.message}/> }
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </>

  );
}

export default App;
