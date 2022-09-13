import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy_Products = [
  {
    id: 1,
    title: "My First Book",
    price: 6,
    description: "The first book i ever wrote",
  },
  {
    id: 2,
    title: "My Second Book",
    price: 5,
    description: "The second book i ever wrote",
  },
  {
    id: 3,
    title: "My Third Book",
    price: 6,
    description: "The third book i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
