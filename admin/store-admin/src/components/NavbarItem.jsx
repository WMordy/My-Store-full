import React from 'react'

export default function NavbarItem(props) {
    return (
        <div className="accordion-item">
          <h2 className="accordion-header" id={"heading"+props.id}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+props.id} aria-expanded="true" aria-controls={"collapse"+props.id}>
              <h6 className="store-name">Home {props.id}</h6>
            </button>
          </h2>
          <div id={"collapse"+props.id} className="accordion-collapse collapse  " aria-labelledby={"heading"+props.id} data-bs-parent="accordionExample">
            <div className="accordion-body">
              <nav className="nav flex-column">
                <a className="nav-link active" aria-current="page" href="#">Spring</a>
                <a className="nav-link" href="#">Ok</a>
                <a className="nav-link" href="#">Bye</a>

              </nav>

            </div>
          </div>
        </div>
    )
}
