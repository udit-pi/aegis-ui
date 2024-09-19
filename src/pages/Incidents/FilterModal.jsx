import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const FilterModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" className='btn-sm' onClick={handleShow}>
       Advance Filters
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filter Incidents</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add filter form fields here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Apply Filters
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FilterModal;
