import React, { useState } from 'react'
import { useParams } from 'react-router'
import FilterBar from '../../components/FilterBar'
import Footer from '../../components/footer'
import HomeTitle from '../../components/HomeTitle'
import Navbar from '../../components/navbar'
import PostsHolder from '../../components/PostsHolder'

export default function GenderPage() {
   
   const {gender} = useParams("gender")
    return (
        <div>
            <Navbar/>
            <HomeTitle text = {gender} />
            <FilterBar/>
            <PostsHolder/>
           
            <Footer/>
        </div>
    )
}
