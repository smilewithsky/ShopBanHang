import React from 'react'
import { FilterWrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import FormatMoney from '../../Common/FormatMoney';
function FilterPanel({setSort , sort , search , setSearch , type , setType , setSale , setFilterPrice , setRating , rating , sale}) {
  const typeProduct = ["Quần Nam" , "Mũ Nam" , "Áo Nam" , "Giày Nam"];
  const ratingList = [5 , 4 , 3 , 2 , 1];
  const priceProduct = ["nhỏ hơn 1 triệu" , "từ 1 triệu đến 2 triệu" , "lớn hơn 2 triệu"];
  const handleSelectType = (e) => {
    setType( props => {
      const isType = props.includes(e.target.value)
      if(isType){
        return props.filter( item => item !== e.target.value )
      }
      else{
        return [...props , e.target.value]
      }
    } )
  }

  const handleRating = (e) => {
    setRating( props => {
      const isRating = props.includes(parseFloat(e.target.value))
      if(isRating){
        return props.filter(item => item !== parseFloat(e.target.value))
      }
      else{
        return [...props , parseFloat(e.target.value)]
      }
    } )
  }

  const handleFilterPrice = (e) => {
    setFilterPrice( (props) => {
      const isInclude = props.includes( e.target.value )
      if(isInclude){
        return props.filter( item => item !== e.target.value )
      }
      else{
        console.log("props ",[...props, e.target.value]);
        return [...props, e.target.value]
      }
    } )
  }

  return (
    <FilterWrapper>
      <div className='filter-group'>
        <h3 className="filter-group__header">Lọc Theo Loại Sản Phẩm</h3>
        <div className="filter-group__body">
            {typeProduct.map( (item , index) => (
              <div className='filter-check-box' key={`input-${index}`}>
                <input className='filter-input-check-box' type="checkbox" value={item} name="type-product" id={`type-product-${index}`} onChange={(e) => handleSelectType(e)} />
                <label htmlFor={`type-product-${index}`}>{item}</label>
              </div>
            ) )}
        </div>
      </div>
      
      <div className='filter-group'>
        <h3 className="filter-group__header">Tìm Kiếm Sản Phẩm</h3>
        <div className="filter-group__body">
            <div className='filter-input'>
              <input type="text" name="" id="filter-input-text" placeholder='nhập từ khóa' value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
        </div>
      </div>

      <div className='filter-group'>
        <h3 className="filter-group__header">Lọc Sản Phẩm Theo Sao</h3>
        <div className="filter-group__body">
            {ratingList.map( (item , index) => (
              <div className='filter-check-box' key={`rating-${index}`}>
                <input className='filter-input-check-box' type="checkbox" name="rating-product" value={item} id={`rating-product-${index}`} onClick={(e) => handleRating(e)} />
                <label htmlFor={`rating-product-${index}`}>{item} <FontAwesomeIcon icon = {faStar} /></label>
              </div>
            ) )}
        </div>
      </div>

      <div className='filter-group'>
        <h3 className="filter-group__header">Sắp Xếp Sản Phẩm</h3>
        <div className="filter-group__body">
            <div className="filter-input">
              <select
                value={sort}
                onChange={ (e) => {
                  setSort(e.target.value)
                }} 
                name="" 
                id="filter-select">
                <option value="default">Mặc đinh</option>
                <option value="down">Từ cao đến thấp</option>
                <option value="up">Từ thấp đến cao</option>
              </select>
            </div>
        </div>
      </div>

      <div className='filter-group'>
        <h3 className="filter-group__header">Sản Phẩm Khuyến Mại</h3>
        <div className="filter-group__body">
            <div className='filter-check-box'>
              <input className='filter-input-check-box' type="checkbox" name="type-product" id="sale-product" onChange={() => setSale(!sale)} />
              <label htmlFor="sale-product">Sale</label>
            </div>
        </div>
      </div>

      <div className='filter-group'>
        <h3 className="filter-group__header">Lọc Sản Phẩm Theo Giá</h3>
        <div className="filter-group__body">
            {priceProduct.map( (item , index) => (
              <div className='filter-check-box' key={`price-${index}`}>
                <input className='filter-input-check-box' type="checkbox" name="type-product" id={`price-product-${index}`} onClick={(e) => handleFilterPrice(e)} value={item} />
                <label htmlFor={`price-product-${index}`}>{item}</label>
              </div>
            ) )}
        </div>
      </div>
    </FilterWrapper>
  )
}

export default FilterPanel