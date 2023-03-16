import React from 'react';
import { SearchItemWrapper } from './styled'
import { Link } from 'react-router-dom'

function SearchItem({item , handleCloseSearch}){
    console.log("item ",item);

    const { nameProduct , id , colorProduct , priceProduct } = item
    const [{ image }] = colorProduct

    return (
        <SearchItemWrapper onClick={handleCloseSearch}>
            <Link to={`/detail/${id}`} className="search-item__link">
                <img src={image} alt="" />
                <div className='search-item__content'>
                    <h3 className='search-item__content-name'>
                        {nameProduct}
                    </h3>

                    <p className='search-item__content-price'>
                        {priceProduct}
                    </p>
                </div>
            </Link>
        </SearchItemWrapper>
    )
}

export default SearchItem;
