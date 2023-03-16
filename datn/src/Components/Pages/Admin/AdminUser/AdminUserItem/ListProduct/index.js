import React from 'react';
import ProductItem from './ProductItem';
import { AdminListProductCartWrapper } from './styled'
function ListProduct({item}){
    // console.log("item Product",item);
    return (
        <AdminListProductCartWrapper>
            {item.map(item => (
                <ProductItem item={item} />
            ))}
        </AdminListProductCartWrapper>
    )
}

export default ListProduct;
