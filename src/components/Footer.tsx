import React from 'react'
import footerlogo from '../assets/imgs/footerlogo.png';
import x from '../assets/imgs/x.png';
import insta from '../assets/imgs/insta.png';
import linkdin from '../assets/imgs/linkdin.png';
import behance from '../assets/imgs/behance.png';
import tetra from '../assets/imgs/tetra.png';
import { Link } from 'react-router-dom';

function Footer(): JSX.Element {  return (
    <>
    <div className="bg-black footer">
      <div className="row justify-content-center d-flex   mx-auto row-main">
        <div className="col-md-3 col-12">
          <div className="logo">
            <img src={footerlogo} alt="" className='img-fluid'/>
          </div>
          <br />
          <div className="d-flex gap-3 justify-content-center">
          <img src={x} alt="" className='img-fluid'/>
          <img src={insta} alt="" className='img-fluid'/>
          <img src={linkdin} alt="" className='img-fluid'/>
          <img src={behance} alt="" className='img-fluid'/>
          <img src={tetra} alt="" className='img-fluid'/>

          </div>
        </div>
        <div className="col-md-2 col-4">
          <div className="links">
            <h1>Quick Links</h1>
            <ul className='list-unstyled'>
              <li className='pt-2'><a href="" >About Us </a></li>
              <li className='pt-2'><a href="">Pricing Table</a></li>
              <li className='pt-2'><Link to="/">Contact Us</Link></li>
              <li className='pt-2'><a href="/contact-responses">ContactUs Response </a></li>
              <li className='pt-2'><a href="">Latest News</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-4">
        <div className="links">
            <h1>Company</h1>
            <ul className='list-unstyled'>
              <li className='pt-2'><a href="" >Case Studies  </a></li>
              <li className='pt-2'><a href="">FAQ’s</a></li>
              <li className='pt-2'><a href="">Services</a></li>
              <li className='pt-2'><Link to="/">Customer Support </Link></li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-4">
        <div className="links">
            <h1>Legal</h1>
            <ul className='list-unstyled'>
              <li className='pt-2'><a href="" >Privacy Policy</a></li>
              <li className='pt-2'><a href="">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright pt-5">
<div className="row justify-content-center text-center d-flex mx-auto">
  <div className="col-md-12">
    <hr />
    <p className='p-3'> © 2023 Web Olympus. All Rights Reserved</p>
  </div>
</div>
      </div>
      </div>
    </>
  )
}

export default Footer
