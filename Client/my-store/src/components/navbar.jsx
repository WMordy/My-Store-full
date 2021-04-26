import React from 'react'

export default function Navbar() {
    
    return (
        <div className>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">My Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav   mx-auto  ">
        <a className="nav-link active" aria-current="page" href="#">WishList</a>
        <a className="nav-link" href="#">Cart</a>
        <a className="nav-link" href="#">Pricing</a>
        
      </div>
    </div>
  </div>
</nav>

        </div>
    )
}
