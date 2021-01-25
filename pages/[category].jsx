import { useSelector, useDispatch  } from 'react-redux'
import {addToCart, addSortProducts} from "../store/Action"
import MainLayout from "../Components/Layout";
import ProductList from "../Components/ProductList";
import {  useState, useEffect } from "react";
import { useRouter } from "next/router";




export default function CategoryProduct () {
    const router = useRouter();

    const dispatch = useDispatch()

    const { products, totalProductCount, pageSize, currentPage } = useSelector(state => state.productsArray)
    useEffect(() => {
        dispatch(addSortProducts(router.query.category))
      }, [router.query.category])
    
    return (
        <>
            <MainLayout>
        <div>category</div>
        <ProductList />
        </MainLayout>
        </>
    )
}