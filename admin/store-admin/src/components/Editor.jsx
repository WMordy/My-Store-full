import React from 'react'
import AddProduct from './AddProduct'
import EditSection from './EditSection'
import Product from './Product'

export default function Editor() {
    return (
        <div className="container-fluid editor">
            <div className="row justify-content-center  pt-3 ">
                <div className="col-12 text-center " >
                    <h2>Men's page Edit</h2>
                </div>


            </div>

            <div className="row text-center py-2 ">

            </div>
            <div className="row align-items-center">
                <div className="col-lg-3 py-3">
                    <Product id={1} />

                </div>
                <div className="col-lg-3 py-3">
                    <Product id={2} />

                </div>
                <div className="col-lg-3 py-3">
                    <Product id={3} />

                </div>
                <div className="col-lg-3 py-3">
                    <AddProduct id={4} />

                </div>


            </div>
            <div className=" py-5">
                <div>
                    <EditSection/>
                </div>
            </div>
        </div>
    )
}
