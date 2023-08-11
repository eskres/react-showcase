import { Modal } from "bootstrap";

// Toggle modal visibilitiy
export default function toggleModal(modal, modalRef) {
    // useRef to safely access modal in DOM
    const myModal = Modal.getOrCreateInstance(modalRef.current);
    switch (modal) {
        case modal = false:
        myModal.hide();
        break;
        case modal = true:
        myModal.show();
        break;
        default:
        break;
    }
}