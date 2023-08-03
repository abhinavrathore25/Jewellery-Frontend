import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../commonFiles/config';
import bracelets from "../assets/bracelets.jpg";
import earing from "../assets/earing.jpg";
import ring from "../assets/ring.jpg";
import necklace from "../assets/necklace.jpg";
import front from "../assets/front.png";
import testimonial from "../assets/testimonial.png";

const Home = () => {

  const [userData, setuserData] = useState({});

  function handleLogout() {
    axios.get('http://localhost:8080/logout', config)
    .then(res => {
      if(res.data === 'Success')
      {
        console.log(res.data);
        setuserData({});
      }
      else 
        alert('Logout Unsuccessful');
    })
  }

  useEffect(() => {
    axios.get('http://localhost:8080/userInformation', config)
      .then(res => {
        if(res.data)
          setuserData({...res.data});
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className="container-fluid main">
        <img src={front} className="front img-fluid" alt="front" width="100%" loading='lazy' />
        <div className="content">
          <p className="heading ">Where Dreams Sparkle, Unforgettable Jewels</p>
          <button type="button" className="btn f-btn btn-dark disable">
            EXPLORE →
          </button>
          <button type="button" className="btn f-btn btn-dark disable" onClick={handleLogout}>
            LOGOUT
          </button>
          <div className='avatarContainer'>
          { 
            Object.keys(userData).length === 0 
            ? 
            <i className="fa-regular fa-circle-user"></i> 
            :
            (
            userData.profilePhoto !== '' 
            ?
            <img src={userData.profilePhoto} alt='profilePhoto' />
            :
            <i className="fa-regular fa-circle-user"></i> 
            )
          }
            <p>{userData.email}</p>
          </div>
        </div>
      </div>

      <div className="container-fluid wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="allContent">
              <img
                src={necklace}
                loading='lazy'
                alt="Necklace"
                className="img-fluid "
                width="750"
              />
              <p>save 35% off</p>
              <h1>Necklace</h1>
              <button>shop Now</button>
            </div>
          </div>
          <div className="col-md-6">
            {/* Second column with three images */}
            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="allContent">
                  <img
                    src={bracelets}
                    loading='lazy'
                    alt="Bracelets"
                    className="img-fluid"
                    width="700"
                  />
                  <p>save 35% off</p>
                  <h1>Bracelets</h1>
                  <button>shop Now</button>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="disable allContent">
                  <img
                    src={ring}
                    loading='lazy'
                    alt="Ring"
                    className="img-fluid"
                    width="330"
                    height="200px"
                  />
                  <p>save 35% off</p>
                  <h1>Ring</h1>
                  <button>shop Now</button>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="disable allContent">
                  <img
                    src={earing}
                    loading='lazy'
                    alt="Earing"
                    className="img-fluid"
                    width="334"
                  />
                  <p>save 35% off</p>
                  <h1>Earing</h1>
                  <button>shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* crousel */}
      <section className="crousel-sec">
        <div className="crousel-p">
          <h1>Product Of the Week</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
            nulla?
          </p>
        </div>

        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <div className="row">
                {[
                  {
                    id: 1,
                    src: ring,
                    h2: "metalic silver ring",
                    price: "$20.00",
                    className: "col-lg-4 ",
                  },
                  {
                    id: 2,
                    src: ring,
                    h2: "metalic silver ring",
                    price: "$20.00",
                    className: "col-lg-4 disable",
                  },
                  {
                    id: 3,
                    src: ring,
                    h2: "metalic silver ring",
                    price: "$20.00",
                    className: "col-lg-4 disable",
                  },
                ].map(({ id, src, h2, price, className }) => (
                  <div key={id} className={className}>
                    <img
                      src={src}
                      loading='lazy'
                      alt={h2}
                      width={300}
                      height={250}
                      className="c-img"
                    />
                    <div className="crousel-con">
                      <h2 className="crousel-h2">{h2}</h2>
                      <p>{price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="row">
                {[
                  {
                    id: 1,
                    src: ring,
                    h2: "metalic silver ring",
                    price: "$20.00",
                    className: "col-lg-4",
                  },
                  {
                    id: 2,
                    src: ring,
                    h2: "metalic silver ring",
                    price: "$20.00",
                    className: "col-lg-4 disable",
                  },
                  {
                    id: 3,
                    src: ring,
                    h2: "metalic silver ring",
                    price: "$20.00",
                    className: "col-lg-4 disable",
                  },
                ].map(({ id, src, h2, price, className }) => (
                  <div key={id} className={className}>
                    <img
                      src={src}
                      loading='lazy'
                      alt={h2}
                      width={300}
                      height={250}
                      className="c-img"
                    />
                    <div className="crousel-con">
                      <h2 className="crousel-h2">{h2}</h2>
                      <p>{price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                {[
                  {
                    id: 1,
                    src: ring,
                    h2: "metalic silver ring",
                    price: "$20.00",
                    className: "col-lg-4",
                  },
                  {
                    id: 2,
                    src: ring,
                    h2: "metalic silver ring",
                    price: "$20.00",
                    className: "col-lg-4 disable",
                  },
                  {
                    id: 3,
                    src: ring,
                    h2: "metalic silver ring",
                    price: "$20.00",
                    className: "col-lg-4 disable",
                  },
                ].map(({ id, src, h2, price, className }) => (
                  <div key={id} className={className}>
                    <img
                      src={src}
                      loading='lazy'
                      alt={h2}
                      width={300}
                      height={250}
                      className="c-img"
                    />
                    <div className="crousel-con">
                      <h2 className="crousel-h2">{h2}</h2>
                      <p>{price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev crousel-btn-left"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next crousel-btn-right"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* crousel */}
      <section className="shopby">
        <div className="cateroryshop container-fluid">
          <div>
            {" "}
            <h1 className="shop-cat">
              Shop By <span>Category</span>{" "}
            </h1>
          </div>
          <div className="row">
            {[
              { id: 1, src: ring, title: "Necklace" },
              { id: 2, src: ring, title: "Bracelates" },
              { id: 3, src: ring, title: "ring" },
              { id: 4, src: ring, title: "earing" },
            ].map(({ id, src, title }) => (
              <div key={id} className="cate circle col-lg-2">
                <img
                  className="cate-img"
                  loading='lazy'
                  src={src}
                  alt={title}
                  width={150}
                  height={150}
                />
                <p>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="testimonial">
        <div className="container-fuid">
          <div className="back">
            <img
              src={testimonial}
              loading='lazy'
              alt="testimonial"
              className="img-fluid position-absolute"
              width="100%"
              height={300}
            />
          </div>
          <div className="p-testimonial">
            <div className="testimonial-text">
              <p>Happy Client</p>
              <h2 className="whatclient">What Client Says?</h2>
              <p className="specific">make it Specific</p>
              <p className="review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quia, repellendus odit veniam voluptatum, nisi sed ipsa
                obcaecati esse eius fuga hic iusto tempore architecto.
              </p>
              <p className="pagination">1/2</p>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="collection col-lg-2">
              <h3 className="f-h3">Collection</h3>
              {["necklace", "ring", "earing", "braclets"].map((item, index) => (
                <ul key={index}>
                  <li className="f-li">{item}</li>
                </ul>
              ))}
            </div>
            <div className="More col-lg-2">
              <h3 className="f-h3">More</h3>
              {[
                "Wedding Accessories",
                "Complete set",
                "Traditional Jwelery",
              ].map((item, id) => (
                <ul key={id}>
                  <li className="f-li">{item}</li>
                </ul>
              ))}
            </div>
            <div className="col-lg-6">
              <div className="f-content">
                <h2 className="f-h2">Join Out Mailing List</h2>
                <p className="f-p">
                  Stay current the lattest design news from DevSquad
                </p>
                <input
                  className="f-input"
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Enter Your Email"
                />
                <br />
                <button className="f-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;