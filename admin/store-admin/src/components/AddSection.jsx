import React from 'react'

export default function AddSection() {
    var AddSectionToPage = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let slogan = document.getElementById("slogan").value
        let pageID = document.getElementById("inputGroupSelect01").value
        let name = document.getElementById("name").value
        var raw = JSON.stringify({ "slogan": slogan, "name": name, "pageID": pageID });
        console.log(`${slogan} ${pageID} ${name}`)
        document.getElementById("name").value = ""
        document.getElementById("slogan").value = ""
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:020699/api/v1/section", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    return (
        <div>
            <div>
                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add new section
  </button>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="row ">
                                        <div className="col-12 py-2">
                                            <div className="input-group mb-3">
                                                <label className="input-group-text" htmlFor="inputGroupSelect01">Choose gender</label>
                                                <select className="form-select" id="inputGroupSelect01">

                                                    <option value={1}>Women</option>
                                                    <option value={2}>Men</option>
                                                    <option value={3}>Kids</option>
                                                </select>
                                            </div>



                                        </div>
                                        <div className="col-12 py-2">
                                            <div>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon2">Section name</span>
                                                    <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" id="name" />

                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-12 py-2">
                                            <div>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon3">Slogan</span>
                                                    <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon3" id ="slogan"/>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" /* onClick = {AddSectionToPage} */>Save</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
