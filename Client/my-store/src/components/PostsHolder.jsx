import React from 'react'
import PostCard from './PostCard'

export default function PostsHolder() {
    return (
        <div className="container py-4">
            <div className="row justify-content-center ">
                <div className="col-lg-3">
                   <PostCard title = "Pants" desc = "Good Jeans pants for men " price = "200 DH" />

                </div>
                <div className="col-lg-3">
                   <PostCard title = "Pants" desc = "Good Jeans pants for men " price = "200 DH" />

                </div>
                <div className="col-lg-3">
                   <PostCard title = "Pants" desc = "Good Jeans pants for men " price = "200 DH" />

                </div>
                <div className="col-lg-3">
                   <PostCard title = "Pants" desc = "Good Jeans pants for men " price = "200 DH" />

                </div>
               
                
                
            </div>
        </div>
    )
}
