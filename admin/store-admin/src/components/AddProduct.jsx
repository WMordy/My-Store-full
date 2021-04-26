import React from 'react'

export default function AddProduct(props) {
    return (
        <div>
            <div>


                <div className="modal fade " id={"exampleModal" + props.id} tabIndex={-1} aria-labelledby={"exampleModal" + props.id + "Label"} aria-hidden="true">
                    <div className="modal-dialog ">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={"exampleModal" + props.id + "Label"}>Product {props.id}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="row justify-content-center">

                                        <div className="">
                                            <div className="container-fluid">
                                                <div className="row text-center justify-content-center">
                                                    <div className="col-12">
                                                        <h4>Product details</h4>
                                                    </div>

                                                </div>
                                                <div className="row justify-content-center">

                                                    <div className="col-lg-6">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                                                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="inputGroup-sizing-default">price</span>
                                                            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                                        </div>
                                                    </div>


                                                </div>
                                                <div className="row justify-content-center">
                                                    <div className="col mb-3">
                                                        <div className="input-group">
                                                            <span className="input-group-text">Description</span>
                                                            <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="mb-3">
                                                        <label htmlFor="formFile" className="form-label">Add  picture</label>
                                                        <input className="form-control" type="file" id="formFile" />
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Save</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card product-card add-product" >

                <div className="card-body text-center">
                    <h5 className="card-title">Add product</h5>
                    <p className="card-text">Add a new product to your list</p>

                    <div className="row text-center ">
                        <div className="col">
                            <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target={"#exampleModal" + props.id}>Add</a>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
