import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Breadcrumb from '../Common/Breadcrumb';
import ProductItem from '../Common/ProductItem';
import { ProductItemWrapper } from './styled'
import { productApi } from '../../../Api';
import Loading from '../Common/Loading';
import FilterPanel from './FilterPanel';
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import RemoveAccents from '../Common/RemoveAccents';
import { range } from 'lodash'
function Product() {
    const [currentIndex, setCurrentIndex] = useState(0)
    function removeAccents(str) {
        var AccentsMap = [
            "aàảãáạăằẳẵắặâầẩẫấậ",
            "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
            "dđ", "DĐ",
            "eèẻẽéẹêềểễếệ",
            "EÈẺẼÉẸÊỀỂỄẾỆ",
            "iìỉĩíị",
            "IÌỈĨÍỊ",
            "oòỏõóọôồổỗốộơờởỡớợ",
            "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
            "uùủũúụưừửữứự",
            "UÙỦŨÚỤƯỪỬỮỨỰ",
            "yỳỷỹýỵ",
            "YỲỶỸÝỴ"
        ];
        for (let i = 0; i < AccentsMap.length; i++) {
            let re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
            let char = AccentsMap[i][0];
            str = str.replace(re, char);
        }
        return str;
    }
    let pages
    let limit = 6;
    const pagination = (arr) => {
        pages = Math.ceil(arr.length / limit)
        const start = currentIndex * limit;
        const end = (currentIndex + 1) * limit
        let dataPage = [...arr.slice(start, end)]
        return dataPage
    }
    const [pageProduct, setPageProduct] = useState(10)
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const param = useParams()
    const [sort, setSort] = useState('default');
    const [search, setSearch] = useState();
    const [rating, setRating] = useState([]);
    const [type, setType] = useState([]);
    const [sale, setSale] = useState(false);
    const [filterPrice, setFilterPrice] = useState([])
    const data = () => {
        const sortDown = [...products].sort((a, b) => {
            if (a.priceProduct < b.priceProduct) {
                return 1
            }
            if (a.priceProduct == b.priceProduct) {
                return 0
            }
            if (a.priceProduct > b.priceProduct) {
                return -1
            }
        })

        if (param.search) {
            let filterData = [...products].filter(item => {
                return removeAccents(item.nameProduct).toLowerCase().includes(removeAccents(param.search).toLowerCase())
            })
            return filterData
        }

        if (search) {
            return [...products].filter(item => removeAccents(item.nameProduct).toLowerCase().includes(removeAccents(search).toLowerCase()))
        }

        if (type.length) {
            const typeClone = [...type].map(item => removeAccents(item).toLowerCase())
            return [...products].filter(item => typeClone.includes(removeAccents(item.typeProduct).toLowerCase()))
        }

        if (sale) {
            const isSale = [...products].filter(item => {
                if (item.saleProduct) {
                    if (item.saleProduct !== "") {
                        return item
                    }
                }
            });
            return isSale
        }

        if (rating.length) {
            const isRating = [...products].filter(item => {
                if (rating.includes(item.ratingProduct)) {
                    return item
                }
            })

            return isRating
        }

        if (filterPrice.length) {
            console.log("filter ", filterPrice);
            if (filterPrice.includes("nhỏ hơn 1 triệu") && !filterPrice.includes("từ 1 triệu đến 2 triệu") && !filterPrice.includes("lớn hơn 2 triệu")) {

                return [...products].filter((item) => {
                    console.log("item ", (100 - parseFloat(item.saleProduct)) / 100);
                    if (item.saleProduct) {
                        return (item.priceProduct * ((100 - parseFloat(item.saleProduct)) / 100)) < 1000000
                    }
                    else
                        return item.priceProduct < 1000000
                })
            }
            if (filterPrice.includes("nhỏ hơn 1 triệu") && filterPrice.includes("từ 1 triệu đến 2 triệu") && !filterPrice.includes("lớn hơn 2 triệu")) {
                return [...products].filter((item) => {
                    console.log("item ", (100 - parseFloat(item.saleProduct)) / 100);
                    if (item.saleProduct) {
                        return (item.priceProduct * ((100 - parseFloat(item.saleProduct)) / 100)) < 2000000
                    }
                    else
                        return item.priceProduct < 2000000
                })
            }

            if (filterPrice.includes("nhỏ hơn 1 triệu") && filterPrice.includes("lớn hơn 2 triệu") && !filterPrice.includes("từ 1 triệu đến 2 triệu")) {
                return [...products].filter((item) => {
                    console.log("item ", (100 - parseFloat(item.saleProduct)) / 100);
                    if (item.saleProduct) {
                        return (item.priceProduct * ((100 - parseFloat(item.saleProduct)) / 100)) < 1000000 || (item.priceProduct * ((100 - parseFloat(item.saleProduct)) / 100)) > 2000000
                    }
                    else
                        return item.priceProduct < 1000000 || item.priceProduct > 2000000
                })
            }

            if (filterPrice.includes("lớn hơn 2 triệu") && filterPrice.includes("từ 1 triệu đến 2 triệu") && !filterPrice.includes("nhỏ hơn 1 triệu")) {
                return [...products].filter((item) => {
                    console.log("item ", (100 - parseFloat(item.saleProduct)) / 100);
                    if (item.saleProduct) {
                        return (item.priceProduct * ((100 - parseFloat(item.saleProduct)) / 100)) >= 1000000
                    }
                    else
                        return item.priceProduct >= 1000000
                })
            }

            if (filterPrice.includes("nhỏ hơn 1 triệu") && filterPrice.includes("từ 1 triệu đến 2 triệu") && filterPrice.includes("lớn hơn 2 triệu")) {
                return [...products]
            }

            if (!filterPrice.includes("nhỏ hơn 1 triệu") && filterPrice.includes("từ 1 triệu đến 2 triệu") && !filterPrice.includes("lớn hơn 2 triệu")) {

                return [...products].filter((item) => {
                    console.log("item ", (100 - parseFloat(item.saleProduct)) / 100);
                    if (item.saleProduct) {
                        return (item.priceProduct * ((100 - parseFloat(item.saleProduct)) / 100)) >= 1000000 && (item.priceProduct * ((100 - parseFloat(item.saleProduct)) / 100)) < 2000000
                    }
                    else
                        return item.priceProduct > 1000000 && item.priceProduct < 2000000
                })
            }

            if (!filterPrice.includes("nhỏ hơn 1 triệu") && !filterPrice.includes("từ 1 triệu đến 2 triệu") && filterPrice.includes("lớn hơn 2 triệu")) {

                return [...products].filter((item) => {
                    console.log("item ", (100 - parseFloat(item.saleProduct)) / 100);
                    if (item.saleProduct) {
                        return (item.priceProduct * ((100 - parseFloat(item.saleProduct)) / 100)) > 2000000
                    }
                    else
                        return item.priceProduct > 2000000
                })
            }
        }

        switch (sort) {
            case "default": return products;
            case "up": return sortDown;
            case "down": return sortDown.reverse();
            default: return products
        }
    }

    useEffect(() => {
        setIsLoading(true)
        try {
            const fetchData = async () => {
                const response = await axios.get(productApi);
                if (response.status === 200 || response.status === 201) {
                    setTimeout(() => {
                        setIsLoading(false);
                        setProducts(response.data)
                    }, 1500)
                }
            }
            fetchData()
        } catch (error) {
            console.log("error ", error);
        }

        return () => {

        }
    }, [])

    useEffect(() => {
        setCurrentIndex(0)
    }, [data().length])





    if (isLoading) {
        return <Loading></Loading>
    }





    return (
        <ProductItemWrapper className='container'>
            <div className="row">
                <Breadcrumb link="Sản phẩm quần áo nam thời trang nam mới nhất"></Breadcrumb>
            </div>

            <div className="row">
                <div className="col-12 searchParam">
                    {
                        typeof param.search === "string" ? <h1>Kết quả tìm kiếm "{param.search.trim()}" : </h1> : ""
                    }
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-lg-3">
                    <FilterPanel setSort={setSort} sort={sort} search={search} setSearch={setSearch} type={type} setType={setType} setSale={setSale} setRating={setRating} rating={rating} sale={sale} setFilterPrice={setFilterPrice} filterPrice={filterPrice} />
                </div>
                <div className="col-12 col-md-12 col-lg-9">
                    <div className="row d-flex justify-content-center align-items-center">
                        {data().length ? data().length ? pagination(data().map(item => (
                            <div className='col-6 col-md-6 col-lg-4'>
                                <ProductItem key={uuidv4()} product={item}></ProductItem>
                            </div>)
                        )) : <div className=''>
                            <h3 className='text-center'>Sản Phẩm Hiện Không có</h3>
                        </div> : <div className=''>
                            <h3 className='text-center'>Sản Phẩm Hiện Không có</h3>
                        </div>}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="list-button justify-content-center">
                    {range(pages).map(item => (
                        <button key={uuidv4()} onClick={() => setCurrentIndex(item)} className={`${item === currentIndex ? "active" : ""}`}>{item + 1}</button>
                    ))}
                </div>
            </div>
        </ProductItemWrapper>
    )
}

export default Product;
