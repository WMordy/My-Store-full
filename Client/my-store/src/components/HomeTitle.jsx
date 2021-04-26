import React from 'react'

export default function HomeTitle(props) {
    return (
       
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <h2>{props.text}</h2>
                </div>
                <div className="col-sm-2 col-lg-2     title-decoration "></div>
            </div>
        
    )
}
