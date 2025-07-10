import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {shoppingCartActions} from "../../store/shopping-cart";

const CartButton = (props) => {
    const dispatch = useDispatch();

    const cartItemCount = useSelector(state => state.shoppingCart.items.length);

    const onToggleCart = () =>{
        dispatch(shoppingCartActions.toggleShoppingCart())
    }

    return (
    <button className={classes.button} onClick={onToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemCount}</span>
    </button>
  );
};

export default CartButton;
