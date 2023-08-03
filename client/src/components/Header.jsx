import React from 'react'
import "../Styles/header.css"
import { BiSearchAlt2 } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useState } from 'react'
const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>

              <li className="nav-item">
                <a onMouseEnter={handleHover}
                  className="nav-link" href="/#">
                  Category
                </a>

              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">contact</a>
              </li>
            </ul>

            <ul className="right-nav navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
              <li className="nav-item"><a className="nav-link" href="/Register">Register</a></li>
              <li className="nav-item"><a className="nav-link" href="/login"><BiSearchAlt2 /></a></li>
              <li className="nav-item"><a className="nav-link" href="/cart"><AiOutlineHeart /></a></li>
              <li className="nav-item"><a className="nav-link" href="/wishlist"><AiOutlineShoppingCart /></a></li>
            </ul>

          </div>
        </div>
      </nav>

      {isHovered && <div className="hover-block">
        <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
          <div className='row'>
            <div className='col-lg-3'>
              <h2 className='collection-head' >Necklace</h2>
              <ul>
                {[
                  { id: 1, title: "Choker", href: "/#" },
                  { id: 1, title: "Choker", href: "/#" },
                  { id: 1, title: "Choker", href: "/#" },
                  { id: 1, title: "Choker", href: "/#" },
                ].map(({ id, title, href }) => (
                  <li className='coillecton-li' key={id}>
                    <a className='collection-a' href={href}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='col-lg-3'>
              <h2 className='collection-head'>ring</h2>
              <ul>
                {[
                  { id: 1, title: "Choker", href: "/#" },
                  { id: 1, title: "Choker", href: "/#" },
                  { id: 1, title: "Choker", href: "/#" },
                  { id: 1, title: "Choker", href: "/#" },
                ].map(({ id, title, href }) => (
                  <li className='coillecton-li' key={id}>
                    <a className='collection-a' href={href}>{title}</a>
                  </li>
                ))}
              </ul></div>


            <div className='col-lg-3'>
              <h2 className='collection-head' >earing</h2>
              <ul>
                {[
                  { id: 1, title: "Choker", href: "/#" },
                  { id: 1, title: "Choker", href: "/#" },
                  { id: 1, title: "Choker", href: "/#" },
                  { id: 1, title: "Choker", href: "/#" },
                ].map(({ id, title, href }) => (
                  <li className='coillecton-li' key={id}>
                    <a className='collection-a' href={href}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='col-lg-3'>
              <h2 className='collection-head'>Bracelets</h2>
              <ul>
                {[
                  { id: 1, title: "Choker", href: "/#" },
                  { id: 1, title: "Choker", href: "/#" },
                  { id: 1, title: "Choker", href: "/#" },
                  { id: 1, title: "Choker", href: "/#" },
                ].map(({ id, title, href }) => (
                  <li className='coillecton-li' key={id}>
                    <a className='collection-a' href={href}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>



      </div>}

    </div>
  )
}

export default Header;