import React, { useState } from 'react';
import Layout from '../../components/Layout'; 
import { Button, Form, Col, Row } from 'react-bootstrap'; 

const NewIncidentForm = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(files);
  };

  const removeThumbnail = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  return (
    <Layout>
      <div className="form-container">
        {/* Page Title */}
        <div className="form-section-header">New Incident</div>

        <Form>
          {/* Incident Details Section */}
          <div className="form-section-header">Incident Details</div>

          <Row>
            <Col md={6}>
              <Form.Group className="form-group" controlId="eventDateTime">
                <Form.Label>Event Date & Time</Form.Label>
                <Form.Control type="datetime-local" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="form-group" controlId="incidentType">
                <Form.Label>Incident Type</Form.Label>
                <Form.Control as="select">
                  <option>Select Incident Type</option>
                  <option>Near Miss</option>
                  <option>Accident</option>
                  {/* Add other types */}
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="form-group" controlId="activityType">
                <Form.Label>Activity Type</Form.Label>
                <Form.Control as="select">
                  <option>Select Activity Type</option>
                  <option>Construction</option>
                  <option>Maintenance</option>
                  {/* Add other types */}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          {/* Location & Parties Involved */}
          <div className="form-section-header">Location & Parties Involved</div>

          <Row>
            <Col md={6}>
              <Form.Group className="form-group" controlId="businessUnit">
                <Form.Label>Business Unit</Form.Label>
                <Form.Control as="select">
                  <option>Select Business Unit</option>
                  {/* Populate options */}
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="form-group" controlId="site">
                <Form.Label>Site</Form.Label>
                <Form.Control as="select">
                  <option>Select Site</option>
                  {/* Populate options */}
                </Form.Control>
              </Form.Group>
            </Col>

            {/* Additional fields like Work Area, Client, etc. */}
          </Row>

          {/* Drag and Drop Section */}
          <div className="form-section-header">Attachments</div>

          <div className="drag-drop-zone">
            <span className="drag-drop-text">
              <i className="icon-upload" /> Drag & Drop or Click to upload files
            </span>
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              style={{ display: 'none' }} // Hiding default input for better custom styling
            />
          </div>

          {/* Thumbnail Preview */}
          <div className="thumbnail-preview">
            {uploadedFiles.map((file, index) => (
              <div className="thumbnail" key={index}>
                <img
                  src={URL.createObjectURL(file)}
                  alt={`file-preview-${index}`}
                />
                <span
                  className="remove-thumbnail"
                  onClick={() => removeThumbnail(index)}
                >
                  Remove
                </span>
              </div>
            ))}
          </div>
        </Form>

        {/* Fixed Footer with buttons */}
        <div className="form-footer">
          <Button variant="secondary" className="btn-cancel">
            Cancel
          </Button>
          <Button variant="primary" className="btn-save">
            Save
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NewIncidentForm;