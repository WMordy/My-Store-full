import React from 'react'
import Category from './category'
import HomeTitle from './HomeTitle'

export default function CategoriesHolder() {
    return (
        <div className = "container py-2 cat-holder">
            <HomeTitle text = "Just What you want"/>
            <div className="row">
                
                    <Category gender = {0} />
                    <Category gender = {1}/>
                    <Category gender = {2}/>
                
            </div>
        </div>
    )
}
