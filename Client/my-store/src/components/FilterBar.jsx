import React from 'react'

export default function FilterBar() {
    return (
        <div className="container py-3">
            <div className="row justify-content-center text-center">
                <div className="col-lg-4 py-1">
                    <h5>Types</h5>
                    <div className="container">
                        <div className="row " >
                            <div className="form-check col-lg-6">
                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Pants
                            </label>
                            </div>
                            <div className="form-check col-lg-6">
                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Blousers
                            </label>
                            </div>
                            <div className="form-check col-lg-6">
                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked2" />
                                <label className="form-check-label" htmlFor="flexCheckChecked2">
                                    Hats
                            </label>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="col-lg-4 py-1">
                    <h5>Price</h5>
                    <div className="row">
                        <div className="col">
                            <input type="range" className="form-range" id="customRange1" />
                        </div>
                        <div className="col ">500dh</div>

                    </div>

                </div>
              
            </div>
        </div>
    )
}
