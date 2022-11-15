import React from 'react'

export default function Contact() {
  return <>
    <div id='cont' className="container vh-100  text-center ">
      <h2 className=' fs-1 fw-bold mt-2'>CONTACT ME</h2>
      <i className="fa-solid fa-star  icon fa-2xl m-3"></i>

<div className="mt-3">

<div class="form-floating mb-3 ">
        <input type="text" class="form-control border-0 border-bottom" />
        <label className='fs-4' for="floatingInput">Name</label>
      </div>
      <div class="form-floating mb-3 ">
        <input type="email" class="form-control border-0 border-bottom" />
        <label className='fs-4' for="floatingInput">Email Address</label>
      </div>
      <div class="form-floating mb-3 ">
        <input type="tel" class="form-control border-0 border-bottom" />
        <label className='fs-4' >Your phone</label>
      </div>
      <div class="form-floating mb-3 ">
        <textarea class="form-control border-0 border-bottom" ></textarea>
        <label className='fs-4' for="floatingTextarea">Message</label>
      </div>


</div>
      
    </div>



  </>
}
