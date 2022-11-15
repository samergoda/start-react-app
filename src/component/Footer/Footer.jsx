import React from 'react'
import "./footer.css"


export default function Footer() {
  return <>
    <footer className=' text-white   color'>
      <div className="container">
        <div className="row ">
          <div className=" col-md-4 m-auto  text-center">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive
              Clark, MO 65243</p>
          </div>
          <div className=" col-md-4 m-auto  text-center">
            <h3>AROUND THE WEB</h3>
            <div className="d-flex justify-content-center  text-center socialIcon">
              <div className="rounded-circle mx-2 p-2 iconSocial text-center border d-flex align-items-center justify-content-center">
                <i class="fa-brands  fa-xl fa-facebook"></i>
              </div>
              <div className="rounded-circle mx-2 p-2 iconSocial text-center border d-flex align-items-center justify-content-center">
                <i class="fa-brands  fa-xl fa-twitter"></i>
              </div>
              <div className="rounded-circle mx-2 p-2 iconSocial text-center border d-flex align-items-center justify-content-center">
                <i class="fa-brands  fa-xl fa-linkedin"></i>
              </div>
              <div className="rounded-circle mx-2 p-2 iconSocial text-center border d-flex align-items-center justify-content-center">
                <i class="fa-brands  fa-xl fa-dribbble"></i>
              </div>
            </div>
          </div>
          <div className="m-3 col-md-4 m-auto mt-3 text-center">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
    </footer>


  </>
}
