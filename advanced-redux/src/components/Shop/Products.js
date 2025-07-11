import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='My First Book'
          price={6}
          description='The first book I ever wrote'
        />
        <ProductItem
              title='My Second Book'
              price={5}
              description='The second book I ever wrote'
        />
      </ul>
    </section>
  );
};

export default Products;
