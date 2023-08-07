import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart-context';
import './CartIcon.styles.scss';

const CartIcon = () => {
	const { setIsCartOpen } = useContext(CartContext);

	const toggleHandler = () => {
		setIsCartOpen(isCartOpen => !isCartOpen);
	};

	return (
		<div
			className='cart-icon-container'
			onClick={toggleHandler}
		>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>10</span>
		</div>
	);
};

export default CartIcon;