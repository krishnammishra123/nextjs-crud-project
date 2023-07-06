'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal } from "react-bootstrap";

const EditUser = ({ showModal, id, handleModalClose, setUserDetails }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get(`/api/getdatabyid/${id}`);
        setName(res.data.details.name);
        setEmail(res.data.details.email);
      } catch (err) {
        console.log(err);
      }
    };
    getdata();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userDetails = { name, email };
      const res = await axios.put(`/api/update/${id}`, userDetails);
      const { message, status, details } = res.data;
      if (status === 200) {
        console.log(message);
        setName("");
        setEmail("");
        handleModalClose();
       setUserDetails((prev) => prev.map((row) => row._id === details._id ? details : row));
      
      } else {
        console.log("Error:", message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Modal
        show={showModal}
        onHide={handleModalClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="flex flex-col justify-center items-center"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row gap-4 m-2 items-center">
              <label className="text-xl font-bold font-serif">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="p-2 border border-blue-800 rounded w-full md:w-auto"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 m-2 items-center">
              <label className="text-xl font-bold font-serif">Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter Email"
                className="p-2 border border-blue-800 rounded w-full md:w-auto"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 mt-2 bg-blue-800 text-white font-bold font-serif rounded"
            >
              Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleModalClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditUser