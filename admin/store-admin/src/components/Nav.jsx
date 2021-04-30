import React from 'react'
import AddSection from './AddSection'
import NavbarItem from './NavbarItem'

export default function Nav(props) {
  var sections = props.sectionsList
   
  return (
    <div>
      <h3 className="store-name py-2" >My store</h3>
      <div className="accordion" id="accordionExample">
        
      <NavbarItem title = "Home" id = {0} sections = {props.sectionsList}  changeOwner = {props.changeOwner}/>
      <NavbarItem  title = "Women" id = {1} sections = {props.sectionsList} changeOwner = {props.changeOwner}/>
      <NavbarItem  title = "Kids" id = {2} sections = {props.sectionsList} changeOwner = {props.changeOwner}/>
      <NavbarItem  title = "Men" id = {3} sections = {props.sectionsList} changeOwner = {props.changeOwner}/>
      <AddSection/>
       {/*  <div className="accordion-item">
         
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <h6 className="store-name">Men</h6>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <nav className="nav flex-column">
                <a className="nav-link active" aria-current="page" href="#">Spring</a>
                <a className="nav-link" href="#">Ok</a>
                <a className="nav-link" href="#">Bye</a>

              </nav>

            </div>
          </div>
        </div> */}

      </div>


    </div>
  )
}
