import React from 'react'

export default function About() {
  return <>
    <section id='About' className='bgColor vh-100 d-flex align-items-center text-white'>
      <div className="container text-center ">
        <h2 className='text-white fs-1 fw-bold ' >ABOUT</h2>
        <i className="fa-solid fa-star text-white icon fa-2xl mt-3"></i>
        <div className="row mt-3">
          <div className="col-md-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-6">
            <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
          </div>
        </div>
      </div>

    </section>


  </>
}
