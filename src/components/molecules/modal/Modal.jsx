import ModalHeader from "../modalHeader/ModalHeader";

export default function Modal({ id, title, body, footer }) {
  return (
    <div className="modal" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="modalTitle" aria-hidden="true" data-bs-theme="dark">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <ModalHeader title={title}/>
          <div className="modal-body">
            {body}
          </div>
          <div className="modal-footer">
            {footer}
          </div>
        </div>
      </div>
    </div>
  )
}