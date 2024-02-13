import React from 'react'
import Link from 'next/link'


function nav() {
  return (
    <>

<nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500">
      <div className="container">
        <a href="/" className="navbar-brand"><img src="/img/logo.png" width="80" alt="logo"/></a>

        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" href="Post">Post</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="Facebook">Facebook</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="Google">Google</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="Course">Course</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="Contact">Contact</Link>
            </li>
            <li className="nav-item">
              <a href="https://lin.ee/JwrDPgA"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อน" height="36" /></a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
      
    </>
  )
}

export default nav
