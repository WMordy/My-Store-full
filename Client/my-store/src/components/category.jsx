import React from 'react'
import woman from '../assets/wonan.jpg'
import man from '../assets/hassan-ouajbir-MkmcxwwCepY-unsplash.jpg'
import kid from '../assets/janko-ferlic-qJVluHTPx7U-unsplash.jpg'

export default function Category(props) {
    var genderList = [[woman,"Woman style"],[man,"Class for Men"],[kid,"Fashion kids"]]
    return (
        <div className="col-lg-4 py-2" onClick = {(e)=>{
            e.preventDefault()
            window.location.href = "/"+props.gender
        }}>
            <div className="card " >
                <img src={genderList[props.gender][0]} className="card-img-top category-img"  alt="..." />
                <div className="container-fluid d-flex justify-content-center text-center category-card">

                </div>
                <div className="container-fluid d-flex  text-center category-text">
                    <div className="col-12 my-auto category-text2">
                        <h3>{genderList[props.gender][1]}</h3>
                    </div>
                </div>

            </div>

        </div>





    )
}
