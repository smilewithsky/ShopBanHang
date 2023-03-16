
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { v4 as uuid } from 'uuid'
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import Introduce from "./Components/Pages/Introduce";
import { useEffect, useLayoutEffect, useState } from "react";
import Product from "./Components/Pages/Product";
import Home from "./Components/Pages/Home";
import DetailProduct from "./Components/Pages/Common/detail.js";
import { cartApi, productApi, userApi } from "./Api"
import Detail from './Components/Pages/Common/detail.js';
import Cart from './Components/Pages/Cart';
import Login from './Components/Pages/User/login';
import Register from './Components/Pages/User/register';
import NotFound from './Components/Pages/Common/NotFound';
import Admin from './Components/Pages/Admin';
import Pay from './Components/Pages/Pay';
import Page from './Components/Pages/page';
import News from './Components/Pages/News';
import Recruit from './Components/Pages/Recruit';
// import MessengerCustomerChat from 'react-messenger-customer-chat';


// console.log("product ", Products);
function App() {
    // console.log("re-render app");
    // product
    const [products, setProducts] = useState([]);
    const [homeProduct, setHomeProduct] = useState([])
    const [newProducts, setNewProducts] = useState([])

    // users
    const [users, setUsers] = useState([])

    

    // carts
    const [carts, setCarts] = useState([])

    useEffect(() => {
        document.title = "Tiến Anh Shop"
        const getProduct = async () => {
            try {
                const { data: res } = await axios.get(productApi);
                setProducts(res)

                const cloneRes = [...res];
                const homePageProduct = cloneRes.slice(0, 12);
                setHomeProduct(homePageProduct);

                const homePageNewProduct = cloneRes.slice((cloneRes.length - 8))
                setNewProducts(homePageNewProduct)

                // console.log("homePageProduct " ,homePageProduct);
            } catch (error) {
                console.log("Invalid Product", error);
            }
        }
        getProduct()
        return () => {

        }
    }, [])
    // console.log("product", products);
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home data={homeProduct} news={newProducts} />}></Route>
                <Route path="introduce" element={<Introduce />}></Route>
                <Route path="product" element={<Product />}></Route>
                <Route path="product" element={<Product />}>
                    <Route path=":search" element={<Product />}></Route>
                </Route>
                <Route path="detail" element={<Detail />}>
                    <Route path=":id" element={<Detail />}></Route>
                </Route>
                <Route path='cart' element={<Cart />}></Route>
                <Route path='login' element={<Login />}></Route>
                <Route path='register' element={<Register />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="pay" element={<Pay />}></Route>
                <Route path="news" element={<News />}></Route>
                <Route path="recruit" element={<Recruit />}></Route>
                <Route path="page" element={<Page />}>
                    <Route path=":namepage" element={<Detail />}></Route>
                </Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;