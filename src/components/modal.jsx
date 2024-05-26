import { Button, Modal } from "flowbite-react";
import { useState } from "react";

function ModalCustom({ children, open, setOpen }) {
  return (
    <>
      <Modal  show={open} onClose={() => setOpen(false)}>
      <Modal.Header></Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCustom;
