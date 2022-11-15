import React , { useState }  from 'react';
import './style.css'
import cabin from './../../img/cabin.png'
import cake from "./../../img/cake.png"
import circus from "./../../img/circus.png"
import game from "./../../img/game.png"
import safe from "./../../img/safe.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function Portfolio() {

let images = [cabin , cake , circus ,game , safe]

// console.log(images);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true );
 

  return <>
    <div id='port' className="container">
      <div className=" text-center">
        <h2 id='h2' className='fs-1 fw-bold'>PORTFOLIO</h2>
        <i className="fa-solid fa-star icon fa-2xl mt-3"></i>
      </div>
      <div className="row g-3 mt-3">
        <div className="col-md-4 item position-relative" onClick={handleShow}  >
          <img src={cabin} className="w-100 rounded"  alt="" />
          <div className="layer ">
          <i className="fa-solid fa-5x text-white fa-plus"></i>
          </div>
        </div>
        <div className="col-md-4 position-relative" onClick={handleShow}  >
          <img src={game} className="w-100 rounded" alt="" />
          <div className="layer ">
          <i className="fa-solid fa-5x text-white fa-plus"></i>
          </div>
        </div>
        <div className="col-md-4 position-relative" onClick={handleShow}  >
          <img src={cake} className="w-100 rounded" alt="" />
          <div className="layer ">
          <i className="fa-solid fa-5x text-white fa-plus"></i>
          </div>
        </div>
        <div className="col-md-4 position-relative" onClick={handleShow}  >
          <img src={circus} className="w-100 rounded" alt="" />
          <div className="layer ">
          <i className="fa-solid fa-5x text-white fa-plus"></i>
          </div>
        </div>
        <div className="col-md-4 position-relative" onClick={handleShow}  >
          <img src={safe} className="w-100 rounded" alt="" />
          <div className="layer ">
          <i class="fa-solid fa-5x text-white fa-plus"></i>
          </div>
        </div>
        <div className="col-md-4 position-relative" onClick={handleShow}  >
          <img src={game} className="w-100 rounded" alt="" />
          <div className="layer ">
          <i className="fa-solid fa-5x text-white fa-plus"></i>
          </div>
        </div>
      </div>
    </div>

 
 


     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Header</Modal.Title>
        </Modal.Header>
        {images.map((image, index)=> {
          console.log(image);
          return <img key={index} src={image} alt="" />
        })}
        <Modal.Body>
          
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi aliquam atque possimus illum deserunt provident.</p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    






   

  </>
}
