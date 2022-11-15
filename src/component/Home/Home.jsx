import React from 'react'
import "./style.css"
import svg from "./../../img/avataaars.svg"


export default function Home() {
  return <>
  <header  className="bgColor ">
  <div className="container ">
    <div className="row  ">
      <div className="text-center text-white d-flex  align-items-center flex-column"> 
      <img src={svg} className='w-100 m-5 h-25' alt="" />
      <h1  className='  '>START REACT</h1>
      <i class="fa-solid fa-star  fa-2xl mt-3"></i>
      <p className='mt-4'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  </div>
  </header>
  </>
}
