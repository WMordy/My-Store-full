import React from 'react'

export default function NavbarItem(props) {
  var changeEditorSection = (page,section)=>{
    props.changeOwner({pageID:page,section:section})
  }
    return (
        <div className="accordion-item">
          <h2 className="accordion-header" id={"heading"+props.id}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+props.id} aria-expanded="true" aria-controls={"collapse"+props.id}>
              <h6 className="store-name">{props.title}</h6>
            </button>
          </h2>
          <div id={"collapse"+props.id} className="accordion-collapse collapse  " aria-labelledby={"heading"+props.id} data-bs-parent="accordionExample">
            <div className="accordion-body">
              <nav className="nav flex-column">
                {props.sections.map((section,index)=>{
                  return <a className="nav-link " aria-current="page" key={index}  onClick = {()=>changeEditorSection(props.id,section)}>{section.name}</a>
                })}
               

              </nav>

            </div>
          </div>
        </div>
    )
}
