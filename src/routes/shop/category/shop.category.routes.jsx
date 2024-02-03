import { useContext,useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import { CategoriesContext } from "../../../contexts/categories.context";
import { Fragment } from "react";

import ProductCard from "../../../components/product-card/product-card.component";

import './shop.category.styles.scss'

const ShopCategory = () => {
    const {categoryMap} = useContext(CategoriesContext);
    const {category} = useParams();
    const [products, setProducts] = useState(categoryMap[category])

    useEffect(()=>{
        setProducts(categoryMap[category])
    },[category,categoryMap])

    return (
        <Fragment>
        <h2 className="category-title">{category.toUpperCase()}</h2>
        <div className="category-container">
            {products && products.map((product)=>{
                return <ProductCard key={product.id} product={product} />
            })}
        </div>
        </Fragment>
    )

}


export default ShopCategory