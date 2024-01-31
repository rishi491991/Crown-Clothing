import { Fragment, useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import "./shop.styles.scss";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const Shop = () => {
  const { categoryMap } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview title={title} products={products}></CategoryPreview>
        );
      })}
    </div>
  );
};

export default Shop;
