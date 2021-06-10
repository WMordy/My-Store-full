import React from 'react'

export default function Product(props) {
    return (
        <div>
            <div>


                <div className="modal fade " id={"exampleModal" + props.id} tabIndex={-1} aria-labelledby={"exampleModal" + props.id + "Label"} aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={"exampleModal" + props.id + "Label"}>Product {props.id}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 text-center">
                                            <img src="https://pixfeeds.com/images/mens-fashion/outfits/1280-682621676-man-wearing-casual-clothes.jpg" className="img-modal" alt="..." />

                                        </div>
                                        <div className="col-lg-8">
                                            <div className="container">
                                                <div className="row text-center justify-content-center">
                                                    <div className="col-12">
                                                        <h4>Product details</h4>
                                                    </div>

                                                </div>
                                                <div className="row justify-content-center">

                                                    <div className="col-lg-4">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                                                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="inputGroup-sizing-default">price</span>
                                                            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                                        </div>
                                                    </div>


                                                </div>
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-8">
                                                        <div className="input-group">
                                                            <span className="input-group-text">Description</span>
                                                            <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card product-card" >
                <img src="https://pixfeeds.com/images/mens-fashion/outfits/1280-682621676-man-wearing-casual-clothes.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title {props.id}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    <div className="row text-center ">
                        <div className="col">
                            <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target={"#exampleModal" + props.id}>Edit</a>

                        </div>
                        <div className="col">
                            <a href="#" className="btn btn-danger">Delete</a>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
