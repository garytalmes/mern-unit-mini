import { useState } from "react"

const Header = ({currUser, logout={logout}}) => {

  return (
    <header className="pb-0 mb-0" style={{ borderBottom: "1px solid #333" }}>
      <nav className="navbar navbar-dark navbar-expand-md bg-body-secondary" data-bs-theme="dark" style={{ justifyContent: "space-between" }}>
        <div className="container-fluid" style={{ width: "65%"}}>
          {/* <a className="navbar-brand" href="##">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>

              { !currUser && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/signup">Signup Page</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">Login Page</a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div style={{ width: "35%", paddingRight: "10px" }}>
          { currUser && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: "flex", justifyContent: "flex-end"}}>
              <li className="nav-item">
                  <span className="nav-link active">Welcome back, {currUser.fname}</span>
              </li>

              {/* TODO: Add a Logout Link here. When the link is clicked, it should invoke the logout() method  */}
              <li className="nav-item">
                <a className="nav-link active" onClick={logout}>Logout</a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  )
}


export default Header