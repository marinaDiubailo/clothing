import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard.component';

import { CategoriesContext } from '../../contexts/categories.context';
import './Category.styles.scss';

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [categoriesMap, category]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='category-page-container'>
			<h2 className='category-title'>{category.toUpperCase()}</h2>
			<div className='category-container'>
				{products &&
					products.map(product => (
						<ProductCard
							key={product.id}
							product={product}
						/>
					))}
			</div>
		</div>
	);
};

export default Category;
