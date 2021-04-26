import React from 'react'
import ProductActions from './ProductActions'

export default function Product() {
    return (
        <div>
             <div className="container py-2">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-3">
                    <img src="http://buzz16.com/wp-content/uploads/2017/02/Best-Dress-Pants-For-Men8.jpg" className="card-img-top post-card-img" alt="..." />
<ProductActions/>
                    </div>
                    <div className="col-lg-6 py-5">
                        <div className="row">   
                        <div className="col ">
                        <h4>Title of product</h4>
                            </div>
                        <div className="col">
                            <span class="badge price-tag">500 DH</span>
                            </div>
                        
                        </div>
                       
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium nemo enim necessitatibus officiis facere dignissimos maxime ut aperiam itaque, minus fugiat quod id numquam ullam rerum maiores fugit blanditiis odit.</p>
                        <div className="py-3  row">
                            <div className="col-lg-2 col-4">
                            <span class="badge hash-badge">#Style</span>
                            </div>
                            <div className="col-lg-2   col-4">
                            <span class="badge hash-badge">#Summer</span>
                            </div>
                            <div className="col-lg-2 col-4">
                            <span class="badge hash-badge">#Party</span>
                            </div>
                        
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
