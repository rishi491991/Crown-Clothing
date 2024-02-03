import { useContext } from "react";

import { CategoriesContext } from "../../../contexts/categories.context";

import CategoryPreview from "../../../components/category-preview/category-preview.component";

const ShopCategoriesPreview = () => {
  const { categoryMap } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview title={title} products={products} key={title}></CategoryPreview>
        );
      })}
    </div>
  );
};

export default ShopCategoriesPreview;
