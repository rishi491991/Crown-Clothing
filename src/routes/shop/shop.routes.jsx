import { Fragment, useContext, useEffect } from "react";
import {Routes, Route} from 'react-router-dom';
import ShopCategoriesPreview from "./shop.categories-preview/shop.categories-preview.routes";
import { CartContext } from "../../contexts/cart.context";

import ShopCategory from './category/shop.category.routes'


const Shop = () => {
  const {setIsCartOpen} = useContext(CartContext);

    useEffect(() => setIsCartOpen(false), []);

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
