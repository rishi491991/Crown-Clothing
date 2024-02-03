import { Fragment } from "react";
import {Routes, Route} from 'react-router-dom';
import ShopCategoriesPreview from "./shop.categories-preview/shop.categories-preview.routes";

import ShopCategory from './category/shop.category.routes'


const Shop = () => {

  return (
    <Fragment>
      <Routes>
        <Route index element={<ShopCategoriesPreview/>} />
        <Route path=":category" element={<ShopCategory/>} />
      </Routes>
    </Fragment>
  );
};

export default Shop;
