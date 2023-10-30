import { ModalProps } from 'modalInterfaces';
import ModalHeader from '../modalHeader/ModalHeader';

export default function Modal({ id, title, body, footer }: ModalProps): React.JSX.Element {
  return (
    <div className="modal" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="modalTitle" aria-hidden="true" data-bs-theme="dark">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <ModalHeader title={title}/>
          <div className="modal-body">
            {body}
          </div>
          {
          footer ?
            <div className="modal-footer">
              {footer}
            </div>
          :
            null
          }
        </div>
      </div>
    </div>
  )
}