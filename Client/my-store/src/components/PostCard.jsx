import React from 'react'

export default function PostCard(props) {

    return (
        <div>
             
             <div className="card post-card" onClick = {(e)=>{
                 e.preventDefault()
                 window.location.href = "/product/0"
             }}>
                        <img src="http://buzz16.com/wp-content/uploads/2017/02/Best-Dress-Pants-For-Men8.jpg" className="card-img-top post-card-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.desc}</p>

                        </div>
                        
                    <div className="col price px-2  category-text2">
                        <p>{props.price}</p>
                    
                </div>
                    </div>
                   
        </div>
    )
}
