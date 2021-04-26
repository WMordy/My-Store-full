import React from 'react'
import Navbar from '../../components/navbar'
import HomeTitle from '../../components/HomeTitle'
import Product from '../../components/Product'
import Footer from '../../components/footer'
import PostsHolder from '../../components/PostsHolder'
export default function ProductFull() {
    return (
        <div>
            <Navbar/>
            <HomeTitle text = "The full description for you"/>
            <Product/>
            <HomeTitle text = "This might intressed you too"/>
            <PostsHolder/>
            <Footer/>
        </div>
    )
}
