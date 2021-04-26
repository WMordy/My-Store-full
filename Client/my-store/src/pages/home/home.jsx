import React from 'react'
import CategoriesHolder from '../../components/CategoriesHolder'
import Navbar from '../../components/navbar'
import HomeTitle from '../../components/HomeTitle'
import Footer from '../../components/footer'
import PostsHolder from '../../components/PostsHolder'
export default function Home() {
    return (
        <div>
            <Navbar/>
           {/*  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
      <p>visit us</p>
    <div className="carousel-item active">
      <img src="https://twooctobers.com/wp-content/uploads/2018/06/Clothing-Retailer-Store.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://twooctobers.com/wp-content/uploads/2018/06/Clothing-Retailer-Store.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://assets.fastcompany.com/image/upload/w_1280,f_auto,q_60,fl_lossy/fc/3067979-poster-p-1-clothes-shopping-sucks-reformations-new-store-totally-reimagines-the.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> */}

            <CategoriesHolder/>
            <HomeTitle text = "Classy Outfit for you"/>
           <PostsHolder/>
           <HomeTitle text = "Spring 2k21 early"/>
           <PostsHolder/>
           <HomeTitle text = "Lorem ipsum dolar"/>
           <PostsHolder/>
         <Footer/>
        </div>
    )
}
