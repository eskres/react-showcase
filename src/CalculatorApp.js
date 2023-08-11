import React, { useState, useEffect, useRef } from 'react';
import toggleModal from './toggleModal';

export default function CalculatorApp() {
  const [modal, setModal] = useState(false);
  let modalRef = useRef();

  // For modal visibility
  useEffect(() => {
    toggleModal(modal, modalRef);
  })

  return (
    <>
      <button type="button" className="btn btn-outline-light mb-3" 
      onClick={() => {setModal(prevModal => !prevModal);}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calculator m-1" viewBox="0 0 16 16">
        <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
        <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
      </svg>
        Calculator
      </button>
      
      <div className="modal" id="settings" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} ref={modalRef} aria-labelledby="modalTitle" aria-hidden="true" data-bs-theme="dark">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-light">Calculator</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
              onClick={() => {setModal(prevModal => !prevModal);}}></button>
            </div>
            <div className="modal-body container text-center text-light">
            <div className="row my-1"></div>
            <div className="row g-1">
              <div className="col me-1">
                AC
              </div>
              <div className="col me-1">
                +/-
              </div>
              <div className="col me-1">
                %
              </div>
              <div className="col">
                /
              </div>
            </div>
            <div className="row g-1">
              <div className="col me-1">
                7
              </div>
              <div className="col me-1">
                8
              </div>
              <div className="col me-1">
                9
              </div>
              <div className="col">
                ×
              </div>
            </div>
            <div className="row g-1">
              <div className="col me-1">
                4
              </div>
              <div className="col me-1">
                5
              </div>
              <div className="col me-1">
                6
              </div>
              <div className="col">
                -
              </div>
            </div>
            <div className="row g-1">
              <div className="col me-1">
                1
              </div>
              <div className="col me-1">
                2
              </div>
              <div className="col me-1">
                3
              </div>
              <div className="col">
                +
              </div>
            </div>
            <div className="row g-1">
              <div className="col-6 ">
                0
              </div>
              <div className="col">
                .
              </div>
              <div className="col">
                =
              </div>
            </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}